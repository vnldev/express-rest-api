import { Router } from 'express';

import { AuthService } from '@services/AuthService';
import { AuthController } from '@controllers/AuthController';

const authRoutes = Router();
const authService = new AuthService();
const authController = new AuthController(authService);

authRoutes.post('/', (req, res) => authController.authenticateUser(req, res));
authRoutes.post('/refresh', (req, res) =>
  authController.refreshToken(req, res)
);

export { authRoutes };
