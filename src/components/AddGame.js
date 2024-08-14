import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import btnStyles from "../styles/Button.module.css";
import { axiosReq } from "../api/axiosDefaults";

function AddGameModal({ show, onHide }) {
  const [gameData, setGameData] = useState({
    title: "",
    developer: "",
    release_year: "",
    genre: "",
    platform: "",
    multiplayer: false,
  });
  const [errors, setErrors] = useState({});

  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setGameData({
      ...gameData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  useEffect(() => {
    if (show) {
      const fetchGenres = async () => {
        try {
          const { data } = await axiosReq.get("/genres/");
          setGenres(data.results);
        } catch (err) {
          console.log(err);
        }
      };

      const fetchPlatforms = async () => {
        try {
          const { data } = await axiosReq.get("/platforms/");
          setPlatforms(data.results);
        } catch (err) {
          console.log(err);
        }
      };

      fetchGenres();
      fetchPlatforms();
    }
  }, [show]);

  const handleSelectGenre = (genreId) => {
    setGameData({ ...gameData, genre: genreId });
  };

  const handleSelectPlatform = (platformId) => {
    setGameData({ ...gameData, platform: platformId });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">New Game</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formGameTitle">
            <Form.Label>Game Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Game title"
              name="title"
              value={gameData.title}
              onChange={handleChange}
            />
          </Form.Group>
          {errors.title?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="formGameDeveloper">
            <Form.Label>Game Developer</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Developer"
              name="developer"
              value={gameData.developer}
              onChange={handleChange}
            />
          </Form.Group>
          {errors.developer?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="formGameReleaseYear">
            <Form.Label>Release Year</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Release Year"
              name="release_year"
              value={gameData.release_year}
              onChange={handleChange}
            />
          </Form.Group>
          {errors.release_year?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="formGameGenre">
            <Form.Label>Genre</Form.Label>
            <DropdownButton
              id="dropdown-genre"
              title={
                gameData.genre
                  ? genres.find((genre) => genre.id === gameData.genre).name
                  : "Select a genre"
              }
              variant="secondary"
            >
              <div style={{ maxHeight: "150px", overflowY: "auto" }}>
                {genres.map((genre) => (
                  <Dropdown.Item
                    key={genre.id}
                    onClick={() => handleSelectGenre(genre.id)}
                  >
                    {genre.name}
                  </Dropdown.Item>
                ))}
              </div>
            </DropdownButton>
          </Form.Group>
          {errors.genre?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="formGamePlatform">
            <Form.Label>Platform</Form.Label>
            <DropdownButton
              id="dropdown-platform"
              title={
                gameData.platform
                  ? platforms.find(
                      (platform) => platform.id === gameData.platform
                    ).name
                  : "Select a platform"
              }
              variant="secondary"
            >
              <div style={{ maxHeight: "150px", overflowY: "auto" }}>
                {platforms.map((platform) => (
                  <Dropdown.Item
                    key={platform.id}
                    onClick={() => handleSelectPlatform(platform.id)}
                  >
                    {platform.name}
                  </Dropdown.Item>
                ))}
              </div>
            </DropdownButton>
          </Form.Group>
          {errors.platform?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="formGameMultiplayer">
            <Form.Check
              type="checkbox"
              label="Multiplayer"
              name="multiplayer"
              checked={gameData.multiplayer}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" className={btnStyles.AddGameBtn}>
          Add Game
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddGameModal;
