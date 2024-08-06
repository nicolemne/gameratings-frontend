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
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
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
            <Button variant="link" className={styles.BtnSearch} size="sm">
              <i
                className={`fa-solid fa-magnifying-glass ${styles.SearchIcon}`}
              ></i>
            </Button>
          </Form>
          <Nav className="ml-auto text-right">
            <Nav.Link className={styles.BtnHome}>
              <i className={`fa-solid fa-house ${styles.HomeIcon}`}></i>
            </Nav.Link>
            <Nav.Link className={styles.NavLink}>
              <i className={`fa-solid fa-plus ${styles.BtnNewPost}`}></i>
              New Post
            </Nav.Link>
            <Nav.Link className={styles.NavLink}>
              <i className={`fa-regular fa-heart ${styles.BtnLike}`}></i>
              Liked Posts
            </Nav.Link>
            <Nav.Link className={styles.NavLink}>
              <i className={`fa-solid fa-gamepad ${styles.BtnMyGames}`}></i>
              My Games
            </Nav.Link>
            <Nav.Link className={styles.NavLink}>Profile</Nav.Link>
            <Nav.Link>
              <Button variant="primary" size="sm">
                Sign Up
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button variant="dark" size="sm">
                Login
              </Button>
              <Button variant="dark" size="sm">
                Log Out
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
