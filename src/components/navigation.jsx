import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/students">Students</Nav.Link>
          <Nav.Link href="/courses">Courses</Nav.Link>
          <Nav.Link href="/results">Results</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
