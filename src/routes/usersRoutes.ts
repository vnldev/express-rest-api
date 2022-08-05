import { Router } from 'express';

import { UsersService } from '@services/UsersService';
import { UsersController } from '@controllers/UsersController';
import { adminMiddleware } from '@middlewares/adminMiddleware';
import { authenticatedMiddleware } from '@middlewares/authenticatedMiddleware';

const usersRoutes = Router();

const usersService = new UsersService();
const usersController = new UsersController(usersService);

usersRoutes.post('/', (req, res) => usersController.createUser(req, res));
usersRoutes.get('/', authenticatedMiddleware, adminMiddleware, (req, res) =>
  usersController.getAllUsers(req, res)
);
usersRoutes.get('/:id', authenticatedMiddleware, adminMiddleware, (req, res) =>
  usersController.getUserById(req, res)
);
usersRoutes.put('/:id', authenticatedMiddleware, adminMiddleware, (req, res) =>
  usersController.updateUserById(req, res)
);
usersRoutes.delete(
  '/:id',
  authenticatedMiddleware,
  adminMiddleware,
  (req, res) => usersController.deleteUserById(req, res)
);

export { usersRoutes };
