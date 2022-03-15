import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import logger from '../../shared/logger/appLogger';
import { getUserById } from '../../collections/Users/controllers/getUserById';
import { getOneUserByIdService } from '../../collections/Users/services/getOneUserByIdService';
import { getAllProjectsService } from '../services/getAllProjectsService';

export const getAllProjects = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await getOneUserByIdService(req.userId);
    if (!user) throw new ApplicationError(401, `invalid user id`);
    const foods = await getAllProjectsService({owner: user.id});
    res.status(200).json({ data: foods });
  } catch (error: any) {
    logger.error('Error on get all projects controller', {
      instance: 'controllers',
      fn: 'getAllProjects',
      trace: error.message,
    });

    next(
      new ApplicationError(400, `Error getting the projects ${error.message}`)
    );
  }
};
