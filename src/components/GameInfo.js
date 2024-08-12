import React from "react";
import styles from "../styles/SharedBoxStyles.module.css";

const GameInfo = ({ game }) => {
  return (
    <div className={styles.Box}>
      <h5 className="text-center">Game</h5>
      <div className={styles.InfoContainer}>
        <div className={styles.InfoText}>
          <strong>Game</strong> {game?.title || ""}
        </div>
        <div className={styles.InfoText}>
          <strong>Platform</strong> {game?.platform?.name || ""}
        </div>
        <div className={styles.InfoText}>
          <strong>Developer</strong> {game?.game_developer || ""}
        </div>
        <div className={styles.InfoText}>
          <strong>Genre</strong> {game?.genre?.name || ""}
        </div>
        <div className={styles.InfoText}>
          <strong>Release Year</strong> {game?.release_year || ""}
        </div>
        <div className={styles.InfoText}>
          <strong>Multiplayer</strong> {game?.multiplayer ? "Yes" : "No"}
        </div>
        <div className={styles.ImageBox}>
          <img src={game?.image} alt="Game Cover" className={styles.Image} />
        </div>
        <div className={styles.RatingBox}>
          <strong>Rating</strong> {game?.average_star_rating || "N/A"}
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
