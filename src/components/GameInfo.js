// React imports
import React from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

// CSS Styling imports
import styles from "../styles/SharedBoxStyles.module.css";
import btnStyles from "../styles/Button.module.css";

// Components, contexts, hooks, assets & utils imports
import { useSaveGame } from "../hooks/useSaveGame";
import { useCurrentUser } from "../contexts/CurrentUserContext";

// This component renders the same layout for all game fields for
// when creating a post, the Posts page and the Post detail page.

const GameInfo = ({ game }) => {
  // Calls the SaveGame hook to handle saving games and displaying error and success messages.
  const { handleSaveGame, errors, successMessage } = useSaveGame();
  const currentUser = useCurrentUser();

  return (
    // Uses optional chaining to access the game properties and
    // the logical OR || operator to decide which value to display.
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
        {/* Conditionally render the save game button if the user is logged in or not */}
        {currentUser && (
          <Button
            variant="primary"
            className={btnStyles.SaveGameBtn}
            // Calls the handleSaveGame hook to save the game to the users 'My Games'.
            onClick={() => handleSaveGame(game.id)}
          >
            <i
              className={`fa-regular fa-bookmark ${btnStyles.SaveGameBtn}`}
            ></i>
          </Button>
        )}
        {/* Displays an error message if the Game is already saved*/}
        {errors?.non_field_errors?.map((message, idx) => (
          <Alert variant="danger" key={idx} className="mt-2">
            {message}
          </Alert>
        ))}
        {/* Displays a success message when a Game is saved*/}
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
