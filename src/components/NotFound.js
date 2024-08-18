import React from "react";
import NoResults from "../assets/no-results.png";
import styles from "../styles/NotFound.module.css";
import { Link } from "react-router-dom";

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
