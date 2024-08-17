import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";
import { axiosReq } from "../../api/axiosDefaults";
import SavedGames from "./SavedGames";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function SavedGamesPage(filter = "") {
  const [savedGames, setSavedGames] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const { pathname } = useLocation();

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

          {hasLoaded ? (
            <SavedGames savedGames={savedGames.results} />
          ) : (
            <Asset spinner />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default SavedGamesPage;
