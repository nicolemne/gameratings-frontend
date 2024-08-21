// React imports
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import InfiniteScroll from "react-infinite-scroll-component";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

// CSS Styling imports
import styles from "../../styles/SavedGamesPage.module.css";

// Components, contexts, hooks, assets & utils imports
import Asset from "../../components/Asset";
import SavedGames from "./SavedGames";
import { fetchMoreData } from "../../utils/utils";
import { useAllGames } from "../../contexts/AllGamesContext";
import { useSaveGame } from "../../hooks/useSaveGame";
import { useRedirect } from "../../hooks/useRedirect";

// Axios imports
import { axiosReq } from "../../api/axiosDefaults";

// This page handles the display of the saved games, similar to PostsPage and ProfilePage.
// It also include a search feature and the ability to save a game from a dropdown list.

function SavedGamesPage({ message, filter = "" }) {
  // State hooks for managing saved games, loading state, and search queries
  const [savedGames, setSavedGames] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const [dropdownSearchQuery, setDropdownSearchQuery] = useState("");
  const { pathname } = useLocation();
  useRedirect("loggedOut");

  // Fetches all the games from the useAllGamesContext
  const games = useAllGames();

  // Imported custom hook for handling game saving logic and storing any error or success messages
  const { handleSaveGame, errors, successMessage } = useSaveGame();

  // useEffect hook to fetch saved games when component mounts
  useEffect(() => {
    const fetchSavedGames = async () => {
      try {
        const { data } = await axiosReq.get(
          `/saved_games/?${filter}search=${query}`
        );
        setSavedGames(data);
        setHasLoaded(true);
      } catch (err) {
        console.error(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchSavedGames();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  // Filter games based on search query in the dropdown
  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(dropdownSearchQuery.toLowerCase())
  );

  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="py-2 p-0 p-lg-2" lg={8}>
          <i
            className={`fa-solid fa-magnifying-glass ${styles.SearchIcon}`}
          ></i>
          {/* Search bar form to filter saved games */}
          <Form
            className={styles.SearchBar}
            onSubmit={(event) => event.preventDefault()}
          >
            <Form.Control
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              className="mr-sm-2"
              placeholder="Search"
            />
          </Form>
          {/* Displays a warning if a game is already saved, or success if a new game has been added */}
          {errors?.non_field_errors?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          {successMessage && (
            <Alert variant="success" className="mt-2">
              {successMessage}
            </Alert>
          )}

          <div className="text-center">
            {/* Dropdown button for adding games with a search feature */}
            <DropdownButton
              id="dropdown-game-select"
              variant="info"
              title="Add Game"
            >
              <Form.Control
                type="text"
                placeholder="Search games..."
                value={dropdownSearchQuery}
                // Updates the games search state when a user types in the search input
                onChange={(e) => setDropdownSearchQuery(e.target.value)}
                className={`${styles.DropdownSearch}`}
              />
              <div style={{ maxHeight: "150px", overflowY: "auto" }}>
                {/* List of filtered games in dropdown menu */}
                {filteredGames.map((game) => (
                  <Dropdown.Item
                    key={game.id}
                    // Calls handleSaveGame when a user selects a game from the dropdown
                    onClick={() => handleSaveGame(game.id, setSavedGames)}
                  >
                    {game.title} ({game.platform.name})
                  </Dropdown.Item>
                ))}
              </div>
            </DropdownButton>
          </div>

          {/* Conditional rendering based on if the saved games has loaded or not */}
          {hasLoaded ? (
            <>
              {savedGames.results.length ? (
                <InfiniteScroll
                  dataLength={savedGames.results.length}
                  next={() => fetchMoreData(savedGames, setSavedGames)}
                  hasMore={!!savedGames.next}
                  loader={<Asset spinner />}
                >
                  <SavedGames
                    savedGames={savedGames.results}
                    setSavedGames={setSavedGames}
                  />
                </InfiniteScroll>
              ) : (
                <Container className={`${styles.NoResultsContainer}`}>
                  <Asset message={message} />
                </Container>
              )}
            </>
          ) : (
            <Container>
              <Asset spinner />
            </Container>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default SavedGamesPage;
