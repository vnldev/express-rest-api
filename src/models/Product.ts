import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct {
  title: string;
  description: string;
  price: number;
  stock: number;
  image_url?: string;
  createdAt: Date;
}

type Product = Document & IProduct;

const ProductSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  stock: Number,
  image_url: { type: String, required: false },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Product = mongoose.model<Product>('Product', ProductSchema);

export { Product };
