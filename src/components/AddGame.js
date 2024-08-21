// React imports
import React, { useState, useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Image } from "react-bootstrap";

// CSS Styling imports
import styles from "../styles/AddGame.module.css";
import btnStyles from "../styles/Button.module.css";

// Components, contexts, hooks, assets & utils imports
import { useAllGames, useSetAllGames } from "../contexts/AllGamesContext";
import useSearch from "../hooks/useSearch";
import Asset from "../components/Asset";

// Axios imports
import { axiosReq } from "../api/axiosDefaults";

// This custom component opens up a modal when creating a post,
// which the user can use to create a new game in the database.

function AddGameModal({ show, onHide }) {
  // State for storing the game data
  const [gameData, setGameData] = useState({
    title: "",
    developer: "",
    release_year: "",
    genre: "",
    platform: "",
    multiplayer: false,
    gameImage: "",
  });

  // State hooks for form validation errors, genres and platforms
  const [errors, setErrors] = useState({});
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  // Custom hooks for dropdown search functionality
  const genreDropdown = useSearch();
  const platformDropdown = useSearch();

  // Ref for the image file input
  const imageInput = useRef(null);

  // Fetches all the games from the useAllGamesContext and state
  const setGames = useSetAllGames();
  const games = useAllGames();

  // Allows the user to write in form fields
  // (updates form input fields based on user inputs)
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setGameData({
      ...gameData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle image file change
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

  // Fetch genres and platforms for when the modal is open
  useEffect(() => {
    if (show) {
      const fetchGenres = async () => {
        try {
          const { data } = await axiosReq.get("/genres/");
          setGenres(data);
        } catch (err) {
          // console.log(err);
        }
      };

      const fetchPlatforms = async () => {
        try {
          const { data } = await axiosReq.get("/platforms/");
          setPlatforms(data);
        } catch (err) {
          // console.log(err);
        }
      };

      fetchGenres();
      fetchPlatforms();
    }
  }, [show]);

  // Handle genre and platform selection
  const handleSelectGenre = (genreId) => {
    setGameData({ ...gameData, genre: genreId });
    genreDropdown.setSearchQuery("");
  };

  const handleSelectPlatform = (platformId) => {
    setGameData({ ...gameData, platform: platformId });
    platformDropdown.setSearchQuery("");
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    // Format release year to send the correct formatting response to the API
    const formattedYear = `${gameData.release_year}-01-01`;

    // Checks for duplicate games
    const duplicateGame = games.find(
      (game) =>
        game.title.toLowerCase() === gameData.title.toLowerCase() &&
        game.platform.id === parseInt(gameData.platform)
    );

    // Custom validation errors for genre, platform, duplicates and year formatting
    const newErrors = {};

    if (!gameData.genre) newErrors.genre = ["Please select a genre."];
    if (!gameData.platform) newErrors.platform = ["Please select a platform."];
    if (!gameData.release_year)
      newErrors.release_year = ["Date has the wrong format. Please use YYYY."];

    if (duplicateGame) {
      setErrors({
        title: ["A game with this title and platform already exists."],
      });
      return;
    }

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    // Appends the form data
    formData.append("title", gameData.title);
    formData.append("game_developer", gameData.developer);
    formData.append("release_year", formattedYear);
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

  // Filter genres and platforms based on search query
  const filteredGenres = genres.filter((genre) =>
    genre.name.toLowerCase().includes(genreDropdown.searchQuery.toLowerCase())
  );

  const filteredPlatforms = platforms.filter((platform) =>
    platform.name
      .toLowerCase()
      .includes(platformDropdown.searchQuery.toLowerCase())
  );

  return (
    // Modal that opens up inside PostCreateEditForm.js from the "Add Game" button
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
        {/* Calls handleSubmit to handle form submission */}
        <Form onSubmit={handleSubmit}>
          {/* Game Title input */}
          <Form.Group controlId="formGameTitle">
            <Form.Label className={styles.LabelStyle}>Game Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              value={gameData.title}
              // Calls the handleChange function when a user types in the title field
              onChange={handleChange}
              className={styles.InputStyle}
            />
          </Form.Group>
          {/* Displays a warning if title is missing */}
          {errors.title?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          {/* Game Developer input */}
          <Form.Group controlId="formGameDeveloper">
            <Form.Label className={styles.LabelStyle}>
              Game Developer
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Developer"
              name="developer"
              value={gameData.developer}
              // Calls the handleChange function when a user types in the developer field
              onChange={handleChange}
              className={styles.InputStyle}
            />
          </Form.Group>
          {/* Displays a warning if developer is missing */}
          {errors.developer?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          {/* Release Year input */}
          <Form.Group controlId="formGameReleaseYear">
            <Form.Label className={styles.LabelStyle}>Release Year</Form.Label>
            <Form.Control
              type="number"
              placeholder="Year"
              name="release_year"
              value={gameData.release_year}
              // Calls the handleChange function when a user types in the release year field
              onChange={handleChange}
              className={styles.InputStyleYear}
            />
          </Form.Group>
          {/* Displays a warning if release year is missing or in the wrong format */}
          {errors.release_year?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          {/* Genre Dropdown */}
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
              {/* Search input for genres */}
              <Form.Control
                type="text"
                placeholder="Search Genres"
                value={genreDropdown.searchQuery}
                // Updates the genre search state when a user types in the search input
                onChange={(e) => genreDropdown.setSearchQuery(e.target.value)}
                className={`${styles.DropdownSearch}`}
              />
              <div style={{ maxHeight: "150px", overflowY: "auto" }}>
                {/* Filter genres based on search query */}
                {filteredGenres.map((genre) => (
                  <Dropdown.Item
                    key={genre.id}
                    // Calls handleSelectGenre when a user selects a genre from the dropdown
                    onClick={() => handleSelectGenre(genre.id)}
                  >
                    {genre.name}
                  </Dropdown.Item>
                ))}
              </div>
            </DropdownButton>
          </Form.Group>
          {/* Displays a warning if genre is missing */}
          {errors.genre?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          {/* Platform Dropdown */}
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
              {/* Search input for platforms */}
              <Form.Control
                type="text"
                placeholder="Search Platforms"
                value={platformDropdown.searchQuery}
                // Updates the platform search state when a user types in the search input
                onChange={(e) =>
                  platformDropdown.setSearchQuery(e.target.value)
                }
                className={`${styles.DropdownSearch}`}
              />
              <div style={{ maxHeight: "150px", overflowY: "auto" }}>
                {/* Filter platforms based on search query */}
                {filteredPlatforms.map((platform) => (
                  <Dropdown.Item
                    key={platform.id}
                    // Calls handleSelectPlatform when a user selects a platform from the dropdown
                    onClick={() => handleSelectPlatform(platform.id)}
                  >
                    {platform.name}
                  </Dropdown.Item>
                ))}
              </div>
            </DropdownButton>
          </Form.Group>
          {/* Displays a warning if Platform is missing */}
          {errors.platform?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          {/* Multiplayer Checkbox */}
          <Form.Group controlId="formGameMultiplayer">
            <Form.Check
              type="checkbox"
              label="Multiplayer"
              name="multiplayer"
              checked={gameData.multiplayer}
              className={styles.LabelStyle}
              // Calls the handleChange function when a user ticks the checkbox
              onChange={handleChange}
            />
          </Form.Group>

          {/* Game Image Upload */}
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
                    className={`${styles.ImageText} btn`}
                    htmlFor="game-image-upload"
                  >
                    Change image
                    <span>
                      <p className={styles.MaxSize}>Max size of 2 mb</p>
                    </span>
                  </Form.Label>
                </div>
              </>
            ) : (
              <Form.Label htmlFor="game-image-upload">
                <span className={styles.UploadImage}>
                  <i className="fa-regular fa-image"></i>
                  <span className={styles.ImageText}>
                    <Asset message="Click to upload image" />
                    <span>
                      <p className={styles.MaxSize}>Max size of 2 mb</p>
                    </span>
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
            {/* Displays a warning if an Image is missing */}
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Form.Group>

          <Modal.Footer>
            <Button type="submit" className={btnStyles.AddGameBtn}>
              Add New Game
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddGameModal;
