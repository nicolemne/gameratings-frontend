import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import btnStyles from "../styles/Button.module.css";
import { axiosReq } from "../api/axiosDefaults";

function AddGameModal({ show, onHide }) {
  const [gameData, setGameData] = useState({
    title: "",
    developer: "",
    release_year: "",
    genre: "",
    platform: "",
  });
  const [errors, setErrors] = useState({});
  
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  const handleChange = (event) => {
    setGameData({
      ...gameData,
      [event.target.name]: event.target.value,
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
            <Form.Control
              as="select"
              name="genre"
              value={gameData.genre}
              onChange={handleChange}
            >
              <option value="">Select a genre</option>
              {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          {errors.genre?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="formGamePlatform">
            <Form.Label>Platform</Form.Label>
            <Form.Control
              as="select"
              name="platform"
              value={gameData.platform}
              onChange={handleChange}
            >
              <option value="">Select a platform</option>
              {platforms.map((platform) => (
                <option key={platform.id} value={platform.id}>
                  {platform.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          {errors.platform?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
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
