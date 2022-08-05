import 'dotenv/config';

export default {
  port: Number(process.env.SERVER_PORT),
  databaseURL:
    (process.env.MONGODB_URL_DOCKER as string) ||
    (process.env.MONGODB_URL as string),
  salt: Number(process.env.SALT),
  jwt: {
    accessTokenSecret: process.env.SECRET_ACCESS_TOKEN as string,
    refreshTokenSecret: process.env.SECRET_REFRESH_TOKEN as string,
    accessTokenExpiration: process.env.EXPIRATION_ACCESS_TOKEN as string,
    refreshTokenExpiration: process.env.EXPIRATION_REFRESH_TOKEN as string,
  },
};
