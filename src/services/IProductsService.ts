import { IProduct } from '@models/Product';

export interface CreateProductDTO {
  title: string;
  description: string;
  price: number;
  stock: number;
}

export interface IProductsService {
  create(data: CreateProductDTO): Promise<IProduct>;
  listAll(): Promise<IProduct[]>;
  getById(id: string): Promise<IProduct>;
  updateById(id: string, data: CreateProductDTO): Promise<IProduct>;
  deleteById(id: string): Promise<void>;
}
