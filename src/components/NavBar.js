import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logoMain from "../assets/logo_main.png";
import logoSmall from "../assets/logo_small.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar
      className={styles.NavBar}
      expand="md"
      fixed="top"
      bg="transparent"
      variant="dark"
    >
      <Container>
        <NavLink to="/" className={`${styles.NavLink} ${styles.LogoMain}`}>
          <Navbar.Brand>
            <img src={logoMain} alt="logo" height="70px" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className={styles.NavBackground}>
            <div className={styles.SearchContainer}>
              <img
                src={logoSmall}
                alt="logo"
                height="40px"
                className={styles.LogoSmall}
              />
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
            </div>
            <Nav>
              <NavLink
                exact
                to="/"
                className={styles.BtnHome}
                activeClassName={styles.Active}
              >
                <i className={`fa-solid fa-house ${styles.NavHomeIcon}`}></i>
              </NavLink>
              <NavLink
                to="/newpost"
                className={styles.NavLink}
                activeClassName={styles.Active}
              >
                <i className={`fa-solid fa-plus ${styles.NavIcons}`}></i>
                New Post
              </NavLink>
              <NavLink
                to="/likedposts"
                className={styles.NavLink}
                activeClassName={styles.Active}
              >
                <i className={`fa-solid fa-heart ${styles.NavIcons}`}></i>
                Liked Posts
              </NavLink>
              <NavLink
                to="/mygames"
                className={styles.NavLink}
                activeClassName={styles.Active}
              >
                <i className={`fa-solid fa-gamepad ${styles.NavIcons}`}></i>
                My Games
              </NavLink>
              <NavLink
                to="/profile"
                className={styles.NavLink}
                activeClassName={styles.Active}
              >
                <i className={`fa-solid fa-user ${styles.NavIcons}`}></i>
                Profile
              </NavLink>
              <NavLink to="/signup" className={styles.NavLink}>
                <Button
                  className={styles.BtnSignUp}
                  variant="primary"
                  size="sm"
                >
                  Sign Up
                </Button>
              </NavLink>
              <NavLink to="/login" className={styles.NavLink}>
                <Button
                  className={styles.BtnLoginOut}
                  variant="outline-dark"
                  size="sm"
                >
                  Log In
                </Button>
              </NavLink>
              <NavLink to="/logout" className={styles.NavLink}>
                <Button
                  className={styles.BtnLoginOut}
                  variant="outline-dark"
                  size="sm"
                >
                  Log Out
                </Button>
              </NavLink>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
