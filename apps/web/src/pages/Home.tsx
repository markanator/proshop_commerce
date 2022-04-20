import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useAllProductsQuery } from '../async/queries/products';
import Product from '../components/Product';
import { IProduct } from '../types';

type Props = {};

const Home = (props: Props) => {
  const { data: products, isFetching } = useAllProductsQuery();
  if (isFetching) {
    return <div>Loading...</div>;
  }
  if (!products) {
    return <div>No products</div>;
  }
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product: IProduct) => (
          <Col sm={12} md={6} lg={4} key={product.id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
