import { compare } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';

import config from '@config';
import { AppError } from '@errors/AppError';
import { User } from '@models/User';

import {
  AuthenticateUserDTO,
  AuthResponse,
  IAuthService,
} from './IAuthService';

interface Payload {
  sub: string;
}

export class AuthService implements IAuthService {
  async authenticate({
    email,
    password,
  }: AuthenticateUserDTO): Promise<AuthResponse> {
    if (!email || !password) {
      throw new AppError('Missing required fields', 400);
    }
    const userExists = await User.findOne({ email });

    if (!userExists) {
      throw new AppError('Email or password incorrect', 400);
    }

    const passwordMatch = await compare(password, userExists.password);

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect', 400);
    }

    const accessToken = sign({}, config.jwt.accessTokenSecret, {
      subject: userExists.id,
      expiresIn: config.jwt.accessTokenExpiration,
    });

    const refreshToken = sign({}, config.jwt.refreshTokenSecret, {
      subject: userExists.id,
      expiresIn: config.jwt.refreshTokenExpiration,
    });

    return {
      user: {
        name: userExists.name,
        email: userExists.email,
      },
      accessToken,
      refreshToken,
    };
  }

  async refresh(
    token: string
  ): Promise<{ accessToken: string; refreshToken: string }> {
    if (!token) {
      throw new AppError('Authorization token not found', 401);
    }

    try {
      const { sub } = verify(token, config.jwt.refreshTokenSecret) as Payload;

      const accessToken = sign({}, config.jwt.accessTokenSecret, {
        subject: sub,
        expiresIn: config.jwt.accessTokenExpiration,
      });

      const refreshToken = sign({}, config.jwt.refreshTokenSecret, {
        subject: sub,
        expiresIn: config.jwt.refreshTokenExpiration,
      });

      return {
        accessToken,
        refreshToken,
      };
    } catch {
      throw new AppError('Invalid Token', 401);
    }
  }
}
