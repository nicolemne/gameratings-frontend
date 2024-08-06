import React from "react";
import {
  Navbar,
  Container,
  Nav,
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
          <Form className={`d-flex ${styles.NavSearchForm}`}>
            <FormControl
              type="text"
              placeholder="Search"
              size="sm"
              className={styles.NavSearchInput}
            />
            <Button variant="link" className={styles.BtnSearch} size="sm">
              <i
                className={`fa-solid fa-magnifying-glass ${styles.NavSearchIcon}`}
              ></i>
            </Button>
          </Form>

          <Nav className="ml-auto text-right">
            <Nav.Link className={styles.BtnHome}>
              <i className={`fa-solid fa-house ${styles.NavHomeIcon}`}></i>
            </Nav.Link>
            <Nav.Link className={styles.NavLink}>
              <i className={`fa-solid fa-plus ${styles.NavPostIcon}`}></i>
              New Post
            </Nav.Link>
            <Nav.Link className={styles.NavLink}>
              <i className={`fa-regular fa-heart ${styles.NavLikeIcon}`}></i>
              Liked Posts
            </Nav.Link>
            <Nav.Link className={styles.NavLink}>
              <i className={`fa-solid fa-gamepad ${styles.NavMyGamesIcon}`}></i>
              My Games
            </Nav.Link>
            <Nav.Link className={styles.NavLink}>Profile</Nav.Link>
            <Nav.Link>
              <Button className={styles.BtnSignUp} variant="primary" size="sm">
                Sign Up
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button className={styles.BtnLoginOut} variant="dark" size="sm">
                Log In
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button className={styles.BtnLoginOut} variant="dark" size="sm">
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
