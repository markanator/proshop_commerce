import React from "react";
import { Col, Container, Row } from "react-bootstrap";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>Copyright &copy; {new Date().getFullYear()}</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
