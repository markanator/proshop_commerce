import React, { useEffect } from 'react';
import {
  Button,
  Card,
  Col,
  Form,
  Image,
  ListGroup,
  Row,
} from 'react-bootstrap';
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useProductByIdQuery } from '../async/queries/products';
import Message from '../components/Message';
import {
  addItem,
  removeItem,
  selectShoppingCart,
} from '../features/shoppingCart/shoppingCartSlice';
import { formatMoney } from '../utils/formatMoney';

const CartPage = () => {
  const { productId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector(selectShoppingCart);

  const qty = Number(searchParams.get('qty')) ?? 1;

  const { data: productFromUrl, isLoading } = useProductByIdQuery(productId);
  useEffect(() => {
    if (productId && !isLoading && productFromUrl) {
      addToCartWrapper(productFromUrl, qty);
    }
  }, [productId, isLoading, productFromUrl, qty]);

  const addToCartWrapper = (productToAdd: any, qtyToAdd: number) => {
    dispatch(addItem({ product: productToAdd, qty: qtyToAdd }));
  };

  const removeFromCartHandler = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleStartCheckoutProcess = () => {
    navigate('/login?redirect=/shipping');
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>Your cart is empty.</Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item, index) => (
              <ListGroup.Item key={index}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.id}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>{formatMoney(item.price * item.qty)}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        addToCartWrapper(item, Number(e.target.value))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={`item-qty-${x + 1}`} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item.id)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal: ({cartItems.reduce((acc, cv) => acc + cv.qty, 0)})
                items
              </h2>
              <p>
                {formatMoney(
                  cartItems.reduce((acc, cv) => acc + cv.qty * cv.price, 0)
                )}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                variant="primary"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={handleStartCheckoutProcess}
              >
                Proceed to Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartPage;
