import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import SignUpModal from "../modal/SignUpModal";
import "./Navbar.css";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="md" expanded={expanded} className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="logo px-0">
          <img src={logo} alt="Logo" className="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-links">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/postproperties" className="nav-buttons">
              <Button className="post-button">Post Property</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="nav-buttons">
              <SignUpModal />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
