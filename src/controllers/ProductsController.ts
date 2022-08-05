import { Request, Response } from 'express';
import { IProductsService } from '@services/IProductsService';

export class ProductsController {
  constructor(private productsService: IProductsService) {}

  async listAllProducts(
    request: Request,
    response: Response
  ): Promise<Response> {
    const products = await this.productsService.listAll();

    return response.status(200).json(products);
  }

  async createProduct(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const newProduct = await this.productsService.create(data);

    return response.status(201).json(newProduct);
  }

  async getProductById(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    const product = await this.productsService.getById(id);

    return response.json(product);
  }

  async updateProductById(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;
    const data = request.body;
    const product = await this.productsService.updateById(id, data);

    return response.status(200).send();
  }

  async deleteProductById(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;
    await this.productsService.deleteById(id);
    return response.status(204).send();
  }
}
