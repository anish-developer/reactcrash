import Container from "react-bootstrap/Container";
import React from "react";

import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="" className="m-auto">
            Contact Manager
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
