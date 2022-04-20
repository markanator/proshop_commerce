import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Container as="main" className="py-3">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default AppLayout;
