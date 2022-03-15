import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import logger from '../../shared/logger/appLogger';
import { editOneProjectService } from '../services/editOneProjectService';

export const editOneProject = async (
  req: Request<
    { projectId: string },
    {},
    { name?: string; image?: string; price?:number }
  >,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { projectId } = req.params;
    const userId = req.userId;
    const { name, image, price } = req.body;

    const project = await editOneProjectService(userId, projectId, {
      name,
      image,
      price
    });

    res.status(200).json({ data: project });
  } catch (error: any) {
    logger.error('Error editing the project projects', {
      instance: 'controllers',
      fn: 'controllers',
      trace: error.message,
    });

    next(new ApplicationError(400, error.message));
  }
};
