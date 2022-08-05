import mongoose from 'mongoose';

import config from '@config';
import { User } from '@models/User';

async function seedAdmin() {
  const admin = new User({
    name: 'Victor Lima',
    email: 'contato@vnl.dev',
    password: '123456',
    role: 'admin',
  });

  await mongoose.connect(config.databaseURL);
  await admin.save();
  await mongoose.disconnect();
}

seedAdmin()
  .then(() => console.log('Admin user created successfully!'))
  .catch((err) =>
    console.log('Error while creating admin user:\n', err.message)
  )
  .finally(() => process.exit());
