import mongoose from 'mongoose';

import config from '@config';
import { User } from '@models/User';

async function seedUsers() {
  const users = [
    {
      name: 'Elisa Martins',
      email: 'Gabriel17@hotmail.com',
      password: 'JA6EcEQZH8Qga5Z',
      role: 'user',
    },
    {
      name: 'Melissa Moraes',
      email: 'Carla18@live.com',
      password: '_jrfVDJHbjoJVmY',
      role: 'user',
    },
    {
      name: 'Lavínia Barros',
      email: 'Jlio_Saraiva@live.com',
      password: 'sXSmN2VHl34jMuL',
      role: 'user',
    },
    {
      name: 'Rebeca Franco',
      email: 'Joana73@live.com',
      password: '3B8QetUMSZv9AOn',
      role: 'user',
    },
    {
      name: 'Cecília Costa',
      email: 'Nicolas_Nogueira@live.com',
      password: 'S17V8OjTgBJkLyv',
      role: 'user',
    },
  ];

  await mongoose.connect(config.databaseURL);
  const creationPromise = users.map((user) => User.create(user));
  await Promise.all(creationPromise);
  await mongoose.disconnect();
}

seedUsers()
  .then(() => console.log('Users created successfully!'))
  .catch((err) => console.log('Error while seeding users:\n', err.message))
  .finally(() => process.exit());
