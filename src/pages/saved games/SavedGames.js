import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";

const SavedGames = () => {
  const [savedGames, setSavedGames] = useState([]);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get("/saved_games/");
        setSavedGames(data.results || []);
      } catch (err) {
        console.error(err);
      }
    };
    handleMount();
  }, []);

  return (
    <div>
      <h1>My Saved Games</h1>
      <div>
        {savedGames.map((myGames) => (
          <div key={myGames.id}>
            <strong>{myGames.game_title}</strong> - {myGames.status}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedGames;
