import React, { useState, useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Image } from "react-bootstrap";

import styles from "../styles/AddGame.module.css";
import btnStyles from "../styles/Button.module.css";
import Asset from "../components/Asset";

import useSearch from "../hooks/useSearch";
import { useSetAllGames } from "../contexts/AllGamesContext";

import { axiosReq } from "../api/axiosDefaults";

function AddGameModal({ show, onHide }) {
  const [gameData, setGameData] = useState({
    title: "",
    developer: "",
    release_year: "",
    genre: "",
    platform: "",
    multiplayer: false,
    gameImage: "",
  });

  const [errors, setErrors] = useState({});

  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const genreDropdown = useSearch();
  const platformDropdown = useSearch();

  const imageInput = useRef(null);
  const setGames = useSetAllGames();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setGameData({
      ...gameData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleChangeGameImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(gameData.gameImage);
      setGameData((prevGameData) => ({
        ...prevGameData,
        gameImage: URL.createObjectURL(event.target.files[0]),
      }));
      imageInput.current = event.target.files[0];
    }
  };

  useEffect(() => {
    if (show) {
      const fetchGenres = async () => {
        try {
          const { data } = await axiosReq.get("/genres/");
          setGenres(data);
        } catch (err) {
          console.log(err);
        }
      };

      const fetchPlatforms = async () => {
        try {
          const { data } = await axiosReq.get("/platforms/");
          setPlatforms(data);
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
    genreDropdown.setSearchQuery("");
  };

  const handleSelectPlatform = (platformId) => {
    setGameData({ ...gameData, platform: platformId });
    platformDropdown.setSearchQuery("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(); 

    formData.append("title", gameData.title);
    formData.append("game_developer", gameData.developer);
    formData.append("release_year", gameData.release_year);
    formData.append("genre_id", gameData.genre);
    formData.append("platform_id", gameData.platform);
    formData.append("multiplayer", gameData.multiplayer);
    formData.append("image", imageInput.current);

    try {
      const { data } = await axiosReq.post("/games/", formData);
      setGames((prevGames) => [data, ...prevGames]);
      onHide();
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const filteredGenres = genres.filter((genre) =>
    genre.name.toLowerCase().includes(genreDropdown.searchQuery.toLowerCase())
  );

  const filteredPlatforms = platforms.filter((platform) =>
    platform.name
      .toLowerCase()
      .includes(platformDropdown.searchQuery.toLowerCase())
  );

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className={styles.ModalTitleContainer}>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={styles.ModalTitle}
        >
          New Game
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.ModalBody}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formGameTitle">
            <Form.Label className={styles.LabelStyle}>Game Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              value={gameData.title}
              onChange={handleChange}
              className={styles.InputStyle}
            />
          </Form.Group>
          {errors.title?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="formGameDeveloper">
            <Form.Label className={styles.LabelStyle}>
              Game Developer
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Developer"
              name="developer"
              value={gameData.developer}
              onChange={handleChange}
              className={styles.InputStyle}
            />
          </Form.Group>
          {errors.developer?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="formGameReleaseYear">
            <Form.Label className={styles.LabelStyle}>Release Year</Form.Label>
            <Form.Control
              type="number"
              placeholder="Year"
              name="release_year"
              value={gameData.release_year}
              onChange={handleChange}
              className={styles.InputStyleYear}
            />
          </Form.Group>
          {errors.release_year?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="formGameGenre">
            <Form.Label className={styles.LabelStyle}>Genre</Form.Label>
            <DropdownButton
              id="dropdown-genre"
              title={
                gameData.genre
                  ? genres.find((genre) => genre.id === gameData.genre).name
                  : "Select a genre"
              }
              variant="info"
            >
              <Form.Control
                type="text"
                placeholder="Search Genres"
                value={genreDropdown.searchQuery}
                onChange={(e) => genreDropdown.setSearchQuery(e.target.value)}
                className={`${styles.DropdownSearch}`}
              />
              <div style={{ maxHeight: "150px", overflowY: "auto" }}>
                {filteredGenres.map((genre) => (
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
            <Form.Label className={styles.LabelStyle}>Platform</Form.Label>
            <DropdownButton
              id="dropdown-platform"
              title={
                gameData.platform
                  ? platforms.find(
                      (platform) => platform.id === gameData.platform
                    ).name
                  : "Select a platform"
              }
              variant="info"
            >
              <Form.Control
                type="text"
                placeholder="Search Platforms"
                value={platformDropdown.searchQuery}
                onChange={(e) =>
                  platformDropdown.setSearchQuery(e.target.value)
                }
                className={`${styles.DropdownSearch}`}
              />
              <div style={{ maxHeight: "150px", overflowY: "auto" }}>
                {filteredPlatforms.map((platform) => (
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
              className={styles.LabelStyle}
              onChange={handleChange}
            />
          </Form.Group>
          {errors.multiplayer?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group>
            {gameData.gameImage ? (
              <>
                <figure>
                  <Image
                    className={styles.Image}
                    src={gameData.gameImage}
                    rounded
                  />
                </figure>
                <div>
                  <Form.Label
                    className={`${styles.UploadText} btn`}
                    htmlFor="game-image-upload"
                  >
                    Change image
                  </Form.Label>
                </div>
              </>
            ) : (
              <Form.Label htmlFor="game-image-upload">
                <span className={styles.UploadImage}>
                  <i className="fa-regular fa-image"></i>
                  <span className={styles.UploadText}>
                    <Asset message="Click to upload image" />
                  </span>
                </span>
              </Form.Label>
            )}
            <Form.File
              id="game-image-upload"
              accept="image/*"
              ref={imageInput}
              onChange={handleChangeGameImage}
            />
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Form.Group>

          <Modal.Footer>
            <Button type="submit" className={btnStyles.AddGameBtn}>
              Add Game
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddGameModal;
