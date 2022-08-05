import config from '@config';
import mongoose, { Schema, Document, CallbackError } from 'mongoose';
import { hash } from 'bcryptjs';

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  avatar_url?: string;
  created_at: Date;
}

type User = Document & IUser;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
    required: true,
  },
  avatar_url: {
    type: String,
    required: false,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    this.password = await hash(this.password, config.salt);
    return next();
  } catch (err) {
    return next(err as CallbackError);
  }
});

UserSchema.pre('findOneAndUpdate', async function (next) {
  const update = this.getUpdate() as any;

  if (update.password) {
    const hashedPassword = await hash(update.password, config.salt);
    this.setUpdate({
      $set: {
        password: hashedPassword,
      },
    });
    return next();
  }
  return next();
});

const User = mongoose.model<User>('User', UserSchema);

export { User };
