import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useAllProductsQuery } from '../async/queries/products';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';
import { IProduct } from '../types';

type Props = {};

const Home = (props: Props) => {
  const { data: products, isLoading, error } = useAllProductsQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!products) {
    return <div>No products</div>;
  }
  return (
    <>
      <h1>Latest Products</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="error">{error?.message}</Message>
      ) : (
        <Row>
          {products.map((product: IProduct) => (
            <Col sm={12} md={6} lg={4} key={product.id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Home;
