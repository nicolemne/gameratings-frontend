import { useEffect, useState } from "react";
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
      setSuccessMessage(`${data.game_title} was added to your saved games.`);
    } catch (err) {
      if (err.response?.status === 400) {
        setErrors(err.response?.data);
      } else {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage("");
      setErrors({});
    }, 3000);

    return () => clearTimeout(timer);
  }, [successMessage, errors]);

  return { handleSaveGame, errors, successMessage };
};
