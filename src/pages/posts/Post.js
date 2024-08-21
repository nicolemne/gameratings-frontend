// React imports
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

// CSS Styling imports
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

// Components, contexts, hooks, assets & utils imports
import Avatar from "../../components/Avatar";
import GameInfo from "../../components/GameInfo";
import { MoreDropdown } from "../../components/MoreDropdown";
import star from "../../assets/star.png";
import comment_img from "../../assets/comment_img.png";
import heart from "../../assets/heart.png";
import heart_empty from "../../assets/heart_empty.png";

// Axios imports
import { axiosRes } from "../../api/axiosDefaults";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    title,
    content,
    image,
    updated_at,
    star_rating,
    game_id,
    game_title,
    game_genre,
    game_developer,
    game_release_year,
    game_platform,
    game_multiplayer,
    game_image,
    game_average_star_rating,
    postPage,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  // Handle edit post
  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  // Handle delete post
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.goBack();
    } catch (err) {
      // console.log(err);
    }
  };

  // Handle liking post
  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPost) => ({
        ...prevPost,
        results: prevPost.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  // Handle unliking post
  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setPosts((prevPost) => ({
        ...prevPost,
        results: prevPost.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            <span className={styles.OwnerName}>{owner}</span>
          </Link>
          <div className="d-flex align-items-center">
            <span className={styles.UpdatedAt}>{updated_at}</span>
            {is_owner && postPage && (
              // Handles editing and deleting the post
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} className={styles.PostImage} />
      </Link>

      {/* Calls the GameInfo component to render game details */}
      <GameInfo
        game={{
          id: game_id,
          title: game_title,
          genre: { name: game_genre },
          developer: game_developer,
          release_year: game_release_year,
          platform: { name: game_platform },
          multiplayer: game_multiplayer,
          image: game_image,
          average_star_rating: game_average_star_rating,
        }}
      />
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        <div className={styles.PostBar}>
          {like_id ? (
            // Handles unliking the post
            <span onClick={handleUnlike}>
              <img
                src={heart}
                height={25}
                className={styles.Heart}
                alt="heart/like"
              />
            </span>
          ) : currentUser ? (
            // Handles liking the post
            <span onClick={handleLike}>
              <img
                src={heart_empty}
                height={25}
                className={styles.HeartOutline}
                alt="heart/unlike"
              />
            </span>
          ) : (
            // Shows an overlay to logged out users
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log In to like this post</Tooltip>}
            >
              <span>
                <img
                  src={heart_empty}
                  height={25}
                  className={styles.HeartOutline}
                  alt="heart/unlike"
                />
              </span>
            </OverlayTrigger>
          )}
          <span className={styles.LikeCommentText}>{likes_count}</span>
          <Link to={`/posts/${id}`}>
            <img
              src={comment_img}
              height={25}
              className={styles.CommentIcon}
              alt="comment"
            />
          </Link>
          <span className={styles.LikeCommentText}>{comments_count}</span>
          <img src={star} height={25} className={styles.StarIcon} alt="star" />
          <span className={styles.LikeCommentText}>{star_rating}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
