import { useState } from "react";

export const useSelectGame = (games = []) => {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleSelectGame = (gameId) => {
    const game = games.find((g) => g.id === gameId);
    setSelectedGame(game);
  };

  const gameInfo = selectedGame
    ? {
        image: selectedGame.image || "",
        title: selectedGame.title || "",
        platform: selectedGame.platform?.name || "",
        game_developer: selectedGame.game_developer || "",
        genre: selectedGame.genre?.name || "",
        release_year: selectedGame.release_year || "",
        multiplayer: selectedGame.multiplayer ? "Yes" : "No",
        average_star_rating: selectedGame.average_star_rating || "N/A",
      }
    : {
        image: "",
        title: "",
        platform: "",
        game_developer: "",
        genre: "",
        release_year: "",
        multiplayer: "",
        average_star_rating: "N/A",
      };

  return {
    selectedGame,
    handleSelectGame,
    gameInfo,
  };
};
