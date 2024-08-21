// React imports
import React from "react";
import { Link } from "react-router-dom";

// CSS Styling imports
import styles from "../styles/NotFound.module.css";

// Components, contexts, hooks, assets & utils imports
import NoResults from "../assets/no-results.png";

const NotFound = () => {
  return (
    <div className={styles.Margin}>
      <Link to="/">
        <div className={styles.ImageContainer}>
          <img src={NoResults} alt="Page not found" />
        </div>
        <h5 className={styles.Message}>
          Sorry, the page you're looking for does not exist. Click the image to
          go back home.
        </h5>
      </Link>
    </div>
  );
};

export default NotFound;
