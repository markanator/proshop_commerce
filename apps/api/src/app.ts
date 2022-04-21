import * as express from 'express';
import * as cors from 'cors';
import { config } from 'dotenv';
import * as morgan from 'morgan';
import routes from './routes';
import {
  developmentErrors,
  errorHandler,
  notFoundHandler,
} from './utils/errorHandlers';

// load environment variables
config();

// initialize app
const app = express();

// MW
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', routes);

// 404
app.use(notFoundHandler);
// error handler
if (process.env.NODE_ENV === 'development') {
  app.use(developmentErrors);
} else {
  app.use(errorHandler);
}

// export server
export default app;
