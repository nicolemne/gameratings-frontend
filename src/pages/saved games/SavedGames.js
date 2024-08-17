import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";

const SavedGames = () => {
  const [savedGames, setSavedGames] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchSavedGames = async () => {
      try {
        const { data } = await axiosReq.get("/saved_games/");
        setSavedGames(data.results || []);
        setHasLoaded(true);
      } catch (err) {
        console.error(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchSavedGames();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <h1>My Saved Games</h1>
      {hasLoaded ? (
        <div>
          {savedGames.map((myGame) => (
            <div key={myGame.id}>
              <strong>{myGame.game_title}</strong> - {myGame.status}
            </div>
          ))}
        </div>
      ) : (
        <Asset spinner />
      )}
    </div>
  );
};

export default SavedGames;
