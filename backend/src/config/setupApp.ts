// imports
// express imports and middleware
import { Router, Express } from 'express';
import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import { json } from 'body-parser';
import typeorm from 'typeorm';
import { env } from './env';
import cookieParser from 'cookie-parser';

type RouteConfig = { route: string; router: Router };

type AppConfig = { routeConfigs: RouteConfig[] };

const setupDatabase = (typeormModule: typeof typeorm) => {
  const isDebugMode = env.isDevMode();

  try {
    typeormModule.createConnection({
      type: 'postgres',
      host: env.get('DATABASE_HOST'),
      port: env.get('DATABASE_PORT'),
      username: env.get('DATABASE_USERNAME'),
      password: env.get('DATABASE_PASSWORD'),
      database: env.get('DATABASE_NAME'),
      entities: ['build/db/entity/*.{js,ts}'],
      migrations: ['build/db/migration/*.js'],
      synchronize: isDebugMode,
      migrationsRun: true,
      // logging: isDebugMode,
    });

    console.log('Connected to database successfully!');
  } catch (error) {
    console.error(error, 'An error occurred connecting to the database');
  }
};

const setupExpressRoutes = (app: Express, config: AppConfig) => {
  config.routeConfigs.forEach((routeConfig) => {
    app.use(`${env.get('BASE_PATH')}${routeConfig.route}`, routeConfig.router);
  });
};

const setupServer = (config: AppConfig) => {
  const app = express();
  app.use(json());
  app.use(
    cors({
      origin: env.get('CORS_ORIGIN'),
      credentials: true,
    }),
  );
  app.use(cookieParser());
  app.use(logger('dev'));
  setupExpressRoutes(app, config);

  const server = app.listen(env.get('PORT'), () => {
    console.log(`Server running on port: ${env.get('PORT')}`);
  });
  return { app, server };
};

const initEnv = () => {
  try {
    env.init();
  } catch (error) {
    console.error('An error occurred during Environment Initialization:', error);
  }
};

export const setupApp = async (typeormModule: typeof typeorm, config: AppConfig) => {
  initEnv();
  try {
    setupDatabase(typeormModule);
    const { app, server } = setupServer(config);

    return { app, server };
  } catch (error) {
    console.error('An error occurred during setupApp', error);
  }
};
