import mongoose from 'mongoose';

import config from '@config';
import { Product } from '@models/Product';

async function seedProducts() {
  const products = [
    {
      title: 'Genérico Plástico Luvas',
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      price: 743.77,
      stock: 19,
    },
    {
      title: 'Incrível Aço Cadeira',
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      price: 27.56,
      stock: 4,
    },
    {
      title: 'Feito à mão Fresco Bacon',
      description:
        'The Football Is Good For Training And Recreational Purposes',
      price: 919.57,
      stock: 6,
    },
    {
      title: 'Refinado Macio Toalhas',
      description:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      price: 977.81,
      stock: 6,
    },
    {
      title: 'Licenciado Madeira Pizza',
      description:
        'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
      price: 324.89,
      stock: 3,
    },
    {
      title: 'Impressionante Concreto Atum',
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      price: 636.0,
      stock: 0,
    },
  ];

  await mongoose.connect(config.databaseURL);
  const creationPromise = products.map((product) => Product.create(product));
  await Promise.all(creationPromise);
  await mongoose.disconnect();
}

seedProducts()
  .then(() => console.log('Products created successfully!'))
  .catch((err) => console.log('Error while seeding products:\n', err.message))
  .finally(() => process.exit());
