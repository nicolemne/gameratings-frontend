import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Dropdown from "react-bootstrap/Dropdown";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";

import { useAllGames } from "../../contexts/AllGamesContext";

function PostCreateForm() {
  const games = useAllGames();

  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image: "",
  });
  const { title, content, image } = postData;

  const imageInput = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", imageInput.current.files[0]);

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

  const textFields = (
    <div className={`${styles.GamePostBox} text-center`}>
      <h5 className="text-center">Post</h5>
      <Form.Group className="text-center">
        {image ? (
          <>
            <figure>
              <Image className={appStyles.Image} src={image} rounded />
            </figure>
            <div>
              <Form.Label
                className={`${btnStyles.Button} ${btnStyles.Blue} ${styles.ChangeImageText} btn`}
                htmlFor="image-upload"
              >
                Change image
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
              <span className={styles.UploadText}>
                <Asset message="Click to upload image" />
              </span>
              <hr className={styles.CustomHrPost} />
            </span>
          </Form.Label>
        )}
        <Form.File
          id="image-upload"
          accept="image/*"
          ref={imageInput}
          onChange={handleChangeImage}
        />
      </Form.Group>
      {errors?.image?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

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

      <Button
        className={`${btnStyles.Button} ${btnStyles.Purple}`}
        type="submit"
      >
        Create
      </Button>
    </div>
  );

  const gameDropdown = (
    <div className="text-center">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select Game
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {games.map((game) => (
            <Dropdown.Item key={game.id}>{game.title} ({game.platform.name})</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );

  const gameInfo = (
    <div className={styles.GamePostBox}>
      <h5 className="text-center">Game</h5>
      <div className={styles.GameInfoText}>
        <strong>Game:</strong> Name
      </div>
      <div className={styles.GameInfoText}>
        <strong>Developer:</strong> Developer
      </div>
      <div className={styles.GameInfoText}>
        <strong>Genre:</strong> Genre
      </div>
      <div className={styles.GameInfoText}>
        <strong>Platform:</strong> Platform
      </div>
      <div className={styles.GameInfoText}>
        <strong>Release Year:</strong> 2022
      </div>
      <div className={styles.GameInfoText}>
        <strong>Multiplayer:</strong> Yes
      </div>
      <div className={styles.GameInfoText}>
        <strong>Average User Rating:</strong> 4.5
      </div>
      <hr className={styles.CustomHrGame} />
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="d-flex justify-content-between">
        <Col xs={12} md={5} lg={5} className="p-0 p-md-2">
          <Container className={`${appStyles.Content} ${styles.GamePostBox}`}>
            {gameInfo}
            {gameDropdown}
          </Container>
        </Col>
        <Col xs={12} md={7} lg={7} className="p-0 p-md-2">
          <Container className={`${appStyles.Content} ${styles.GamePostBox}`}>
            {textFields}
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;
