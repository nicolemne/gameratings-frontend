import { useState } from "react";
import { axiosRes } from "../api/axiosDefaults";

export const useSaveGame = () => {
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

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
      setSuccessMessage(`Game "${data.game_title}" added to your saved games!`);
    } catch (err) {
      if (err.response?.status === 400) {
        setErrors(err.response?.data);
      } else {
        console.error(err);
      }
    }
  };

  return { handleSaveGame, errors, successMessage };
};
