import * as express from 'express';
import * as cors from 'cors';
import { config } from 'dotenv';
import * as morgan from 'morgan';
import routes from './routes';

// load environment variables
config();

// initialize app
const app = express();

// MW
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/api', routes);

// export server
export default app;
