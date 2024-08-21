// React imports
import { useState } from "react";

// useSelectGame is a custom hook that handles when a user selects a game 
// from the dropdown.
// Used in: PostCreateForm.js & PostEditForm.js

export const useSelectGame = (games = []) => {
  // State hook for storing the currently selected game
  const [selectedGame, setSelectedGame] = useState(null);

  // Function to select a game by its ID and update the selected game state
  const handleSelectGame = (id) => {
    const game = games.find((g) => g.id === id);
    setSelectedGame(game);
  };

  // Conditionally display information about a game if a game has been selected.
  // Returns empty values if no game has been selected yet.
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
