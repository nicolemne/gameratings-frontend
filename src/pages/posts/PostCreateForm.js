import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import sharedStyles from "../../styles/SharedBoxStyles.module.css";

import Asset from "../../components/Asset";
import GameInfo from "../../components/GameInfo";
import AddGameModal from "../../components/AddGame";

import { Image } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";

import { useAllGames } from "../../contexts/AllGamesContext";
import { useSelectGame } from "../../hooks/useSelectedGame";
import useSearch from "../../hooks/useSearch";
import { useRedirect } from "../../hooks/useRedirect";

function PostCreateForm() {
  const games = useAllGames();
  useRedirect("loggedOut");

  const sortedGames = games.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  const { selectedGame, handleSelectGame } = useSelectGame(sortedGames);
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

  const gameSearch = useSearch();
  const [modalShow, setModalShow] = useState(false);

  const handleStarRating = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: parseInt(event.target.value),
    });
  };

  const handleGameSelect = (gameId) => {
    handleSelectGame(gameId);
    gameSearch.setSearchQuery("");
  };

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData((prevPostData) => ({
        ...prevPostData,
        image: URL.createObjectURL(event.target.files[0]),
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

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

    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", imageInput.current.files[0]);
    formData.append("game_id", selectedGame.id);
    formData.append("star_rating", star_rating);

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`);
    } catch (err) {
      console.log(err.response?.data);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(gameSearch.searchQuery.toLowerCase())
  );

  const textFields = (
    <div className={`${sharedStyles.Box} text-center`}>
      <h5 className="text-center">Post</h5>
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
              </span>
            </span>
          </Form.Label>
        )}
        <Form.File
          id="image-upload"
          accept="image/*"
          ref={imageInput}
          onChange={handleChangeImage}
        />
        <hr className={styles.CustomHrPost} />
      </Form.Group>
      {errors?.image?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <div className={styles.GameInfoContainer}>
        {selectedGame && <GameInfo game={selectedGame} />}
      </div>

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
            onChange={(e) => gameSearch.setSearchQuery(e.target.value)}
            className={`${styles.DropdownSearch}`}
          />
          <div style={{ maxHeight: "150px", overflowY: "auto" }}>
            {filteredGames.map((game) => (
              <Dropdown.Item
                key={game.id}
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
            onClick={() => setModalShow(true)}
          >
            Add Game
          </Button>
        </DropdownButton>
        <hr className={styles.CustomHrPost} />
        {errors?.game?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </div>

      <Form.Group>
        <Form.Label className={styles.PostLabel}>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label className={styles.PostLabel}>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

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
              onChange={handleStarRating}
            />
          ))}
        </div>
      </Form.Group>
      {errors?.star_rating?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

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
      <AddGameModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
}

export default PostCreateForm;
