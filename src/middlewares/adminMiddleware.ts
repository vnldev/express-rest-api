import { NextFunction, Request, Response } from 'express';

import { AppError } from '@errors/AppError';
import { User } from '@models/User';

export async function adminMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.user;

  const user = await User.findById(id);

  if (!user) {
    throw new AppError('User not found', 401);
  }

  if (user.role !== 'admin') {
    throw new AppError('User not allowed', 401);
  }

  return next();
}
