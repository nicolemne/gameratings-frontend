// React imports
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

// CSS Styling imports
import styles from "../../styles/SavedGames.module.css";
import btnStyles from "../../styles/Button.module.css";

// Axios imports
import { axiosRes } from "../../api/axiosDefaults";

// This page renders the Game the user has saved to their 'My Games' page.
// Much like Posts and Profiles, this is the page that renders the Game by ID.
const SavedGames = ({ savedGames, setSavedGames }) => {
  const handleChange = async (status, id, game_id) => {
    try {
      const { data } = await axiosRes.put(`/saved_games/${id}/`, {
        status: status,
        game_id: game_id,
      });

      setSavedGames((prevGames) => ({
        ...prevGames,
        results: prevGames.results.map((game) =>
          game.id === id ? { ...game, status: data.status } : game
        ),
      }));
    } catch (err) {
      console.error(err);
    }
  };

  // Deletes a Saved Game by its ID
  const handleDelete = async (id) => {
    try {
      await axiosRes.delete(`/saved_games/${id}/`);
      setSavedGames((prevGames) => ({
        ...prevGames,
        results: prevGames.results.filter((game) => game.id !== id),
      }));
    } catch (err) {
      console.error(err);
    }
  };

  // Bootstrap toggle button for custom styling
  const CustomToggle = React.forwardRef(
    ({ children, onClick, status }, ref) => (
      <button
        ref={ref}
        className={`${styles.DropdownToggle} ${styles[status]}`}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        {children} &#x25BE;
      </button>
    )
  );

  // Formatted status text instead of displaying 'in_progress'
  const statusText = {
    completed: "Completed",
    wishlist: "Wishlist",
    in_progress: "In Progress",
  };

  return (
    <Container className={`${styles.Container}`}>
      <Row className="justify-content-center">
        <Col className="py-2 p-0 p-lg-2">
          <div>
            {/* Render the users Saved Games by ID */}
            {savedGames.map((myGame) => (
              <div key={myGame.id} className={`p-3 mb-4 ${styles.GameCard}`}>
                <div className="text-center mb-4">
                  <h5 className={`mb-2 ${styles.Title}`}>
                    {myGame.game_title}
                  </h5>
                  <div className="d-flex align-items-center justify-content-center">
                    {/* Dropdown for selecting game status */}
                    <Dropdown
                      // Calls the handleChange function to update the status of a saved game 
                      onSelect={(status) =>
                        handleChange(status, myGame.id, myGame.game_id)
                      }
                    >
                      <Dropdown.Toggle
                        as={CustomToggle}
                        id={`dropdown-status-${myGame.id}`}
                        status={myGame.status}
                      >
                        {statusText[myGame.status]}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="completed">
                          Completed
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="wishlist">
                          Wishlist
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="in_progress">
                          In Progress
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    {/* Button to delete the saved game */}
                    <Button
                      variant="primary"
                      className={btnStyles.SavedGame}
                      // Calls the handleDelete function to delete a saved game
                      // by its ID from the list
                      onClick={() => handleDelete(myGame.id)}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </Button>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <div className={styles.ImageBox}>
                    <img
                      src={myGame?.game_image}
                      alt="Game Cover"
                      className={styles.Image}
                    />
                  </div>
                  <div className="ms-3 text-start">
                    <strong className={styles.GameInfo}>Developer</strong>
                    <p className={styles.InfoText}>{myGame.game_developer}</p>
                    <strong className={styles.GameInfo}>Release Year</strong>
                    <p className={styles.InfoText}>
                      {myGame.game_release_year}
                    </p>
                    <strong className={styles.GameInfo}>Genre</strong>
                    <p className={styles.InfoText}>{myGame.game_genre}</p>
                    <strong className={styles.GameInfo}>Platform</strong>
                    <p className={styles.InfoText}>{myGame.game_platform}</p>
                    <strong className={styles.GameInfo}>Multiplayer</strong>
                    <p className={styles.InfoText}>
                      {myGame.game_multiplayer ? "Yes" : "No"}
                    </p>
                    <strong className={styles.GameInfo}>Avg Rating</strong>
                    <p className={styles.InfoText}>
                      {myGame.game_average_star_rating}
                    </p>
                  </div>
                </div>
                <hr className={styles.CustomHr} />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SavedGames;
