import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logoMain from "../assets/logo_main.png";
import logoSmall from "../assets/logo_small.png";
import styles from "../styles/NavBar.module.css";
import btnStyles from "../styles/Button.module.css";

import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      console.log(err);
    }
  };

  const newPostIcon = (
    <NavLink
      to="/posts/create"
      className={styles.NavLink}
      activeClassName={styles.Active}
    >
      <i className={`fa-solid fa-plus ${styles.NavIcons}`}></i>
      New Post
    </NavLink>
  );
  const loggedInIcons = (
    <>
      {/* feed */}
      <NavLink
        to="/feed"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className={`fa-solid fa-gamepad ${styles.NavIcons}`}></i>
        Feed
      </NavLink>
      {/* liked posts */}
      <NavLink
        to="/liked"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className={`fa-regular fa-heart ${styles.NavIcons}`}></i>
        Liked Posts
      </NavLink>
      {/* my games */}
      <NavLink
        to="/mygames"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className={`fa-regular fa-bookmark ${styles.NavIcons}`}></i>
        My Games
      </NavLink>
      {/* profile */}
      <NavLink
        to={`/profiles/${currentUser?.profile_id}`}
        className={styles.NavLink}
      >
        <Avatar src={currentUser?.profile_image} height={40} />
        <span className={styles.ProfileName}>{currentUser?.username}</span>
      </NavLink>
      {/* logout */}
      <NavLink to="/" className={styles.NavLink} onClick={handleSignOut}>
        <Button
          className={btnStyles.BtnLoginOut}
          variant="outline-dark"
          size="sm"
        >
          Log Out
        </Button>
      </NavLink>
    </>
  );
  const loggedOutIcons = (
    <>
      <NavLink to="/signup" className={styles.NavLink}>
        <Button className={btnStyles.BtnSignUp} variant="primary" size="sm">
          Sign Up
        </Button>
      </NavLink>
      <NavLink to="/login" className={styles.NavLink}>
        <Button
          className={btnStyles.BtnLoginOut}
          variant="outline-dark"
          size="sm"
        >
          Log In
        </Button>
      </NavLink>
    </>
  );

  return (
    <Navbar
      expanded={expanded}
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
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className={styles.NavBackground}>
            <div className={styles.SearchContainer}>
              <img
                src={logoSmall}
                alt="logo"
                height="40px"
                className={styles.LogoSmall}
              />
            </div>
            <Nav>
              {/* discover */}
              <NavLink exact to="/" className={`${styles.NavLink}`}>
                <i
                  className={`fa-regular fa-compass ${styles.DiscoverIcon}`}
                ></i>
                Discover
              </NavLink>
              {currentUser && newPostIcon}
              {currentUser ? loggedInIcons : loggedOutIcons}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
