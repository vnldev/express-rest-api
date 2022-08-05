import { Router } from 'express';

import { usersRoutes } from './usersRoutes';
import { authRoutes } from './authRoutes';
import { productsRoutes } from './productsRoutes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/auth', authRoutes);
router.use('/products', productsRoutes);

export { router };
