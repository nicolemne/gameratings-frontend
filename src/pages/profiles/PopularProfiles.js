// React imports
import React from "react";
import { Container } from "react-bootstrap";

// CSS Styling imports
import styles from "../../styles/PopularProfiles.module.css";

// Components, contexts, hooks, assets & utils imports
import Asset from "../../components/Asset";
import { useProfileData } from "../../contexts/ProfileDataContext";
import Profile from "./Profile";

const PopularProfiles = ({ mobile }) => {
  const { popularProfiles } = useProfileData();

  return (
    <Container
      className={`${styles.Content} ${mobile && "d-lg-none text-center mb-3"}`}
    >
      {popularProfiles.results.length ? (
        <>
          <p className={`text-center ${styles.FollowedProfiles}`}>Most followed profiles</p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularProfiles.results.slice(0, 3).map((profile) => (
                <Profile key={profile.id} profile={profile} mobile />
              ))}
            </div>
          ) : (
            popularProfiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} />
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;
