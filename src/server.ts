import config from '@config';
import { app } from './app';

app.listen(config.port || 3000, () =>
  console.log(`Server running at ${config.port}`)
);
