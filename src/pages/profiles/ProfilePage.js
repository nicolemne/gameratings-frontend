// React imports
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

// CSS Styling imports
import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

// Components, contexts, hooks, assets & utils imports
import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { ProfileEditDropdown } from "../../components/MoreDropdown";
import Post from "../posts/Post";
import { fetchMoreData } from "../../utils/utils";
import Asset from "../../components/Asset";

// Axios imports
import { axiosReq } from "../../api/axiosDefaults";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profilePosts, setProfilePosts] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const { id } = useParams();

  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { pageProfile } = useProfileData();

  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profilePosts }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/posts/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfilePosts(profilePosts);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
          />
        </Col>
        <Col lg={6}>
          <h3 className={`m-2 ${styles.ProfileOwner}`}>{profile?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{profile?.posts_count}</div>
              <div className={styles.ProfileDetailText}>posts</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.followers_count}</div>
              <div className={styles.ProfileDetailText}>followers</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.following_count}</div>
              <div className={styles.ProfileDetailText}>following</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button
                className={`${btnStyles.Button} ${btnStyles.BtnFollowOutline}`}
                onClick={() => handleUnfollow(profile)}
              >
                Unfollow
              </Button>
            ) : (
              <Button
                className={`${btnStyles.Button} ${btnStyles.BtnFollow}`}
                onClick={() => handleFollow(profile)}
              >
                Follow
              </Button>
            ))}
        </Col>
        {profile?.content ? (
          <Col className={`p-3 ${styles.ProfileBiography}`}>
            <div>{profile.content}</div>
          </Col>
        ) : (
          <Col className={`p-3 ${styles.ProfileBiography}`}>
            <div className={styles.PlaceholderText}>
              {profile?.owner} is on a side quest. Stay tuned!
            </div>
          </Col>
        )}
      </Row>
    </>
  );

  const mainProfilePosts = (
    <>
      <hr />
      {profilePosts.results.length ? (
        <InfiniteScroll
          children={profilePosts.results.map((post) => (
            <Post key={post.id} {...post} setPosts={setProfilePosts} />
          ))}
          dataLength={profilePosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePosts.next}
          next={() => fetchMoreData(profilePosts, setProfilePosts)}
        />
      ) : (
        <>
          <Asset
            message={`No results found, ${profile?.owner} hasn't posted yet.`}
          />
          <i
            className={`fa-solid fa-magnifying-glass ${appStyles.NoResultsIcon} ${styles.SearchIcon}`}
          ></i>
        </>
      )}
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Container className={styles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfilePosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default ProfilePage;
