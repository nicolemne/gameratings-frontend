import React from "react";
import styles from "../styles/SharedBoxStyles.module.css";
import btnStyles from "../styles/Button.module.css";
import { Button, Alert } from "react-bootstrap";
import { useSaveGame } from "../hooks/useSaveGame";

const GameInfo = ({ game }) => {
  const { handleSaveGame, errors, successMessage } = useSaveGame();

  return (
    <div className={styles.Box}>
      <h5 className="text-center">{game?.game_title || game?.title || ""}</h5>
      <div className={styles.InfoContainer}>
        <div className={styles.InfoText}>
          <strong>Platform</strong>{" "}
          {game?.game_platform || game?.platform?.name || ""}
        </div>
        <div className={styles.InfoText}>
          <strong>Developer</strong>{" "}
          {game?.game_developer || game?.developer || ""}
        </div>
        <div className={styles.InfoText}>
          <strong>Genre</strong> {game?.game_genre || game?.genre?.name || ""}
        </div>
        <div className={styles.InfoText}>
          <strong>Release Year</strong> {game?.release_year || ""}
        </div>
        <div className={styles.InfoText}>
          <strong>Multiplayer</strong>{" "}
          {game?.game_multiplayer || game?.multiplayer ? "Yes" : "No"}
        </div>
        <div className={styles.InfoText}>
          <strong>Avg Rating</strong>{" "}
          {game?.game_average_star_rating || game?.average_star_rating || "N/A"}
        </div>
        <div className={styles.ImageBox}>
          <img
            src={game?.game_image || game?.image}
            alt="Game Cover"
            className={styles.Image}
          />
        </div>
        <Button
          variant="primary"
          className={btnStyles.SaveGameBtn}
          onClick={() => handleSaveGame(game.id)}
        >
          <i className={`fa-regular fa-bookmark ${btnStyles.SaveGameBtn}`}></i>
        </Button>
        {errors?.non_field_errors?.map((message, idx) => (
          <Alert variant="danger" key={idx} className="mt-2">
            {message}
          </Alert>
        ))}
        {successMessage && (
          <Alert variant="success" className="mt-2">
            {successMessage}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default GameInfo;
