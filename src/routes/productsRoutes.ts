import { Router } from 'express';

import { ProductsService } from '@services/ProductsService';
import { ProductsController } from '@controllers/ProductsController';
import { adminMiddleware } from '@middlewares/adminMiddleware';
import { authenticatedMiddleware } from '@middlewares/authenticatedMiddleware';

const productsRoutes = Router();

const productsService = new ProductsService();
const productsController = new ProductsController(productsService);

productsRoutes.get('/', (req, res) =>
  productsController.listAllProducts(req, res)
);

productsRoutes.post('/', authenticatedMiddleware, adminMiddleware, (req, res) =>
  productsController.createProduct(req, res)
);

productsRoutes.get('/:id', (req, res) =>
  productsController.getProductById(req, res)
);

productsRoutes.put(
  '/:id',
  authenticatedMiddleware,
  adminMiddleware,
  (req, res) => productsController.updateProductById(req, res)
);

productsRoutes.delete(
  '/:id',
  authenticatedMiddleware,
  adminMiddleware,
  (req, res) => productsController.deleteProductById(req, res)
);

export { productsRoutes };
