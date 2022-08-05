import config from '@config';

import express, { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import 'express-async-errors';

import { router } from '@routes/index';
import { AppError } from '@errors/AppError';

mongoose.connect(config.databaseURL);
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api', router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  return res.status(500).json({
    message: 'Internal Server Error',
  });
});

export { app };
