import React, { useState } from 'react';
import {
  Button,
  Card,
  Col,
  Form,
  Image,
  ListGroup,
  Row,
} from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useProductByIdQuery } from '../async/queries/products';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Rating from '../components/Rating';
import { formatMoney } from '../utils/formatMoney';

const ProductPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { data: product, isLoading, error } = useProductByIdQuery(productId);
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    navigate(`/cart/${productId}?qty=${qty}`);
  };

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Back
      </Link>
      {isLoading ? (
        <Loader />
      ) : error ? (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <Message variant="error">{(error as any)?.message}</Message>
      ) : null}
      <Row>
        <Col md={6}>
          <Image src={product?.image} alt={product?.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product?.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${formatMoney(product?.price)}
            </ListGroup.Item>
            <ListGroup.Item>Description: {product?.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${formatMoney(product?.price)}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              {product?.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Quantity:</Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(Number(e.target.value))}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button
                  onClick={handleAddToCart}
                  className="w-100 btn-block"
                  type="button"
                  disabled={product.countInStock <= 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductPage;
