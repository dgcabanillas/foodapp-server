import { NextFunction, Request, Response } from 'express';
import { getOneUserByIdService } from '../services/getOneUserByIdService';
import { getUserWithProjectsAndTasksService } from '../services/getUserWithProjectsAndTasksService';

export const getUserById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    try {
      const all = await getUserWithProjectsAndTasksService(id);
  
      const user = await getOneUserByIdService(id);
      res.status(200).json({ data: all });
    } catch (error) {
      next(error);
    }
  };
  