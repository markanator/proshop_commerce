import { Product } from '@prisma/client';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useAllProductsQuery } from '../async/queries/products';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ProductItem from '../components/Product';

const Home = () => {
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <Message variant="error">{(error as any)?.message}</Message>
      ) : (
        <Row>
          {products.map((product: Product) => (
            <Col sm={12} md={6} lg={4} key={product.id}>
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Home;
