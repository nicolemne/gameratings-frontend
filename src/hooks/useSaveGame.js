// React imports
import { useEffect, useState } from "react";

// Axios imports
import { axiosRes } from "../api/axiosDefaults";

// This is a custom hook for saving a game to the 'My Games' page,
// and for managing success and/or error messages.
// Used in: GameInfo.js & SavedGamesPage.js

export const useSaveGame = () => {
  // State hooks for error/success messages
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Logic to save and update a game by its ID to the user's Saved Games
  const handleSaveGame = async (id, setSavedGames) => {
    try {
      const { data } = await axiosRes.post("/saved_games/", {
        game_id: id,
      });
      if (setSavedGames) {
        setSavedGames((prevSavedGames) => ({
          ...prevSavedGames,
          results: [data, ...prevSavedGames.results],
        }));
      }
      setErrors({});
      setSuccessMessage(`${data.game_title} was added to your saved games.`);
    } catch (err) {
      if (err.response?.status === 400) {
        setErrors(err.response?.data);
      } else {
        // console.log(err);
      }
    }
  };

  // Clear messages after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage("");
      setErrors({});
    }, 3000);

    return () => clearTimeout(timer);
  }, [successMessage, errors]);

  return { handleSaveGame, errors, successMessage };
};
