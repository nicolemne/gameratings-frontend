import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from "../assets/logo_gg1.png";

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="md" fixed="top">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" height="60px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              size="sm"
            />
            <Button variant="outline-warning" size="sm">
              <i class="fa-solid fa-magnifying-glass"></i>
            </Button>
          </Form>
          <Nav className="ml-auto text-right">
            <Nav.Link href="#home">
              <i class="fa-solid fa-house"></i>
            </Nav.Link>
            <Nav.Link href="#link">New Post</Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                My Liked Posts
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                My Saved Games
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Button variant="primary" size="sm">
                Sign Up
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button variant="dark" size="sm">
                Login
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
