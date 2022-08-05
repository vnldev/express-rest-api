import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import config from '@config';
import { AppError } from '@errors/AppError';

interface Payload {
  sub: string;
}

export async function authenticatedMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authorizationHeader = request.headers.authorization;

  if (!authorizationHeader) {
    throw new AppError('Authorization token not found', 401);
  }

  const [, token] = authorizationHeader.split(' ');

  try {
    const { sub } = verify(token, config.jwt.accessTokenSecret) as Payload;

    request.user = {
      id: sub,
    };

    next();
  } catch {
    throw new AppError('Invalid authorization token', 401);
  }
}
