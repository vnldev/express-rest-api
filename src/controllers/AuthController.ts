import { Request, Response } from 'express';
import { IAuthService } from '@services/IAuthService';

export class AuthController {
  constructor(private authService: IAuthService) {}

  async authenticateUser(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { email, password } = request.body;

    const authResponse = await this.authService.authenticate({
      email,
      password,
    });

    return response.json(authResponse);
  }

  async refreshToken(request: Request, response: Response): Promise<Response> {
    const token = request.body.refreshToken || request.query.refreshToken;

    const { accessToken, refreshToken } = await this.authService.refresh(token);

    return response.json({ accessToken, refreshToken });
  }
}
