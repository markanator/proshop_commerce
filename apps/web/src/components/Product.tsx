import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IProduct } from '../types';
import { formatMoney } from '../utils/formatMoney';
import Rating from './Rating';

type Props = {
  product: IProduct;
};

const Product = ({ product }: Props) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product.id}`}>
        <Card.Img variant="top" src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">{formatMoney(product.price)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
