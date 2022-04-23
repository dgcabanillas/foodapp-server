import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import logger from '../../shared/logger/appLogger';
import { CreateProject } from '../entity/types/Project';
import { createNewProjectService } from '../services/createNewProjectService';

export const createProjectController = async (
  req: Request<{}, {}, { name: string , image:string, price:number}>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name,image, price} = req.body;
  try {
    const newProject = await createNewProjectService({
      name,
      image,
      price,
      owner: req.userId,
    });
    res.status(201).json({ data: newProject });
  } catch (error: any) {
    logger.error('error on create project controller', {
      instance: 'controller',
      service: 'createProjectController',
      trace: error.message,
    });
    next(new ApplicationError(403, error.message));
  }
};