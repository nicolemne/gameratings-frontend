import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";
import { axiosReq } from "../../api/axiosDefaults";
import SavedGames from "./SavedGames";
import styles from "../../styles/SavedGamesPage.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { Alert, Dropdown, DropdownButton } from "react-bootstrap";
import { useAllGames } from "../../contexts/AllGamesContext";
import { useSaveGame } from "../../hooks/useSaveGame";

function SavedGamesPage({ message, filter = "" }) {
  const [savedGames, setSavedGames] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const [dropdownSearchQuery, setDropdownSearchQuery] = useState("");
  const { pathname } = useLocation();
  const games = useAllGames();
  const { handleSaveGame, errors, successMessage } = useSaveGame();

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
            <DropdownButton
              id="dropdown-game-select"
              variant="info"
              title="Add Game"
            >
              <Form.Control
                type="text"
                placeholder="Search games..."
                value={dropdownSearchQuery}
                onChange={(e) => setDropdownSearchQuery(e.target.value)}
                className={`${styles.DropdownSearch}`}
              />
              <div style={{ maxHeight: "150px", overflowY: "auto" }}>
                {filteredGames.map((game) => (
                  <Dropdown.Item
                    key={game.id}
                    onClick={() => handleSaveGame(game.id, setSavedGames)}
                  >
                    {game.title} ({game.platform.name})
                  </Dropdown.Item>
                ))}
              </div>
            </DropdownButton>
          </div>

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
