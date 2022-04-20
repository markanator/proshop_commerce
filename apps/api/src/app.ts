import * as express from 'express';
import * as cors from 'cors';
import { config } from 'dotenv';
import products from './data/products';

config();

const app = express();

app.use(cors());

app.get('/api', (req, res) => {
  res.send('Hello World');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = { id: productId, title: 'your product' };
  res.json(product);
});

export default app;
