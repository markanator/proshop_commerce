import * as express from 'express';
import * as cors from 'cors';
import { config } from 'dotenv';
import products from './data/products';
import connectDb from './config/db';

config();

const app = express();
connectDb();

app.use(cors());

app.get('/api', (req, res) => {
  res.send('Hello World');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = products.find((product) => product._id === productId);
  res.json(product);
});

export default app;
