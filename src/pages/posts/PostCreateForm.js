// React imports
import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Image } from "react-bootstrap";

// CSS Styling imports
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import sharedStyles from "../../styles/SharedBoxStyles.module.css";

// Components, contexts, hooks, assets & utils imports
import Asset from "../../components/Asset";
import GameInfo from "../../components/GameInfo";
import AddGameModal from "../../components/AddGame";
import { useAllGames } from "../../contexts/AllGamesContext";
import { useSelectGame } from "../../hooks/useSelectedGame";
import useSearch from "../../hooks/useSearch";
import { useRedirect } from "../../hooks/useRedirect";

// Axios imports
import { axiosReq } from "../../api/axiosDefaults";

function PostCreateForm() {
  // Fetched all games from the AllGamesContext
  const games = useAllGames();
  useRedirect("loggedOut");

  // Sorting games alphabetically by title
  const sortedGames = games.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  // Imported custom hook for handling the select game logic, passing in the sorted games
  const { selectedGame, handleSelectGame } = useSelectGame(sortedGames);
  // States for form errors and post data
  const [errors, setErrors] = useState({});
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image: "",
    star_rating: 0,
  });
  const { title, content, image, star_rating } = postData;
  const imageInput = useRef(null);
  const history = useHistory();

  // Custom hook for game search functionality
  const gameSearch = useSearch();
  // State for displaying the Add Game modal
  const [modalShow, setModalShow] = useState(false);

  // Allows the user to select a rating
  const handleStarRating = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: parseInt(event.target.value),
    });
  };

  // Allows the user to select a game from a dropdown
  const handleGameSelect = (gameId) => {
    handleSelectGame(gameId);
    gameSearch.setSearchQuery("");
  };

  // Allows the user to write in form fields 
  // (updates form input fields based on user inputs)
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle image file change
  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData((prevPostData) => ({
        ...prevPostData,
        image: URL.createObjectURL(event.target.files[0]),
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    // Custom validation errors for selecting a game and rating
    if (!selectedGame) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        game: ["Please select a game."],
      }));
      return;
    }

    if (!star_rating) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        star_rating: ["Please select a rating."],
      }));
      return;
    }

    // Appends the form data
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", imageInput.current.files[0]);
    formData.append("game_id", selectedGame.id);
    formData.append("star_rating", star_rating);

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`);
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  // Filter games based on search query
  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(gameSearch.searchQuery.toLowerCase())
  );

  const textFields = (
    <div className={`${sharedStyles.Box} text-center`}>
      <h5 className="text-center">Post</h5>
      {/* Image upload and display */}
      <Form.Group className="text-center">
        {image ? (
          <>
            <figure>
              <Image className={appStyles.Image} src={image} rounded />
            </figure>
            <div>
              <Form.Label
                className={`${btnStyles.Button} ${btnStyles.Blue} ${styles.ImageText} btn`}
                htmlFor="image-upload"
              >
                Change Image
              </Form.Label>
            </div>
          </>
        ) : (
          <Form.Label
            className="d-flex justify-content-center"
            htmlFor="image-upload"
          >
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
          id="image-upload"
          accept="image/*"
          ref={imageInput}
          // Calls handleChangeImage to handle changing images
          onChange={handleChangeImage}
        />
        <hr className={styles.CustomHrPost} />
      </Form.Group>
      {/* Displays a warning if an Image is missing */}
      {errors?.image?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      {/* Calls the GameInfo component to render game details when a game is selected*/}
      <div className={styles.GameInfoContainer}>
        {selectedGame && <GameInfo game={selectedGame} />}
      </div>

      {/* Dropdown for selecting a game */}
      <div className="text-center">
        <DropdownButton
          id="dropdown-basic-button"
          variant="info"
          title="Select Game"
        >
          <Form.Control
            type="text"
            placeholder="Search"
            value={gameSearch.searchQuery}
            // Updates the game search state when a user types in the search input
            onChange={(e) => gameSearch.setSearchQuery(e.target.value)}
            className={`${styles.DropdownSearch}`}
          />
          <div style={{ maxHeight: "150px", overflowY: "auto" }}>
            {/* Display list of filtered games based on search query */}
            {filteredGames.map((game) => (
              <Dropdown.Item
                key={game.id}
                // Calls handleGameSelect when a user selects a game from the dropdown
                onClick={() => handleGameSelect(game.id)}
              >
                {game.title} ({game.platform.name})
              </Dropdown.Item>
            ))}
          </div>
          <Dropdown.Divider />
          <Button
            className={btnStyles.AddGameBtn}
            type="button"
            // Activates the AddGame modal and shows it
            onClick={() => setModalShow(true)}
          >
            New Game
          </Button>
        </DropdownButton>
        <hr className={styles.CustomHrPost} />
        {/* Displays a warning if a game is not selected */}
        {errors?.game?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </div>

      {/* Post Title */}
      <Form.Group>
        <Form.Label className={styles.PostLabel}>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          // Calls handleChange when a user types in the title field
          onChange={handleChange}
        />
      </Form.Group>
      {/* Displays a warning if title is missing */}
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      {/* Post Content */}
      <Form.Group>
        <Form.Label className={styles.PostLabel}>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          value={content}
          // Calls handleChange when a user types in the content field
          onChange={handleChange}
        />
      </Form.Group>
      {/* Displays a warning if content is missing */}
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      {/* Rating selection */}
      <Form.Group className="text-center">
        <Form.Label className={styles.PostLabel}>Rating</Form.Label>
        <div>
          {[1, 2, 3, 4, 5].map((value) => (
            <Form.Check
              inline
              type="radio"
              name="star_rating"
              label={value}
              className={styles.Star}
              key={`star_${value}`}
              value={value}
              checked={postData.star_rating === value}
              // Calls handleChange when a user selects a rating
              onChange={handleStarRating}
            />
          ))}
        </div>
      </Form.Group>
      {/* Displays a warning if star rating is missing */}
      {errors?.star_rating?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      {/* Submit button for creating the post */}
      <Button className={btnStyles.CreateBtn} type="submit">
        Create
      </Button>
    </div>
  );

  return (
    <Container className="justify-content-center">
      <Form onSubmit={handleSubmit}>
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={8} lg={8} className="p-0 p-md-2">
            <Container className={`${appStyles.Content} ${sharedStyles.Box}`}>
              {textFields}
            </Container>
          </Col>
        </Row>
      </Form>
      {/* AddGameModal component for adding a new game */}
      <AddGameModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
}

export default PostCreateForm;
