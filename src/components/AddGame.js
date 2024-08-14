import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import btnStyles from "../styles/Button.module.css";

function AddGameModal({ show, onHide }) {
  const [gameData, setGameData] = useState({
    title: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setGameData({
      ...gameData,
      [event.target.name]: event.target.value,
    });
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
