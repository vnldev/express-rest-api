import { AppError } from '@errors/AppError';
import { Product } from '@models/Product';
import { CreateProductDTO, IProductsService } from '@services/IProductsService';

export class ProductsService implements IProductsService {
  async create(data: CreateProductDTO): Promise<Product> {
    const product = await Product.create(data);
    return product;
  }

  async listAll(): Promise<Product[]> {
    const all = await Product.find();
    return all;
  }

  async getById(id: string): Promise<Product> {
    const product = await Product.findById(id);
    if (!product) {
      throw new AppError('Product not found', 404);
    }
    return product;
  }

  async updateById(id: string, data: CreateProductDTO): Promise<Product> {
    const product = await Product.findByIdAndUpdate(id, data, { new: true });
    if (!product) {
      throw new AppError('Product not found', 404);
    }
    return product;
  }

  async deleteById(id: string): Promise<void> {
    const product = await Product.findByIdAndRemove(id);
    if (!product) {
      throw new AppError('Product not found', 404);
    }
  }
}
