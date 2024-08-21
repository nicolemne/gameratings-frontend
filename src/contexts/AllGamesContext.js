// React imports
import { createContext, useContext, useEffect, useState } from "react";

// Axios imports
import { axiosReq } from "../api/axiosDefaults";

// Fetches all the games from the /games/ API endpoint so all
// games in the database can be displayed in a list or dropdown

// Create context for accessing the list of games
export const AllGamesContext = createContext();
export const SetAllGamesContext = createContext();

// Custom hooks for accessing the contexts
export const useAllGames = () => useContext(AllGamesContext);
export const useSetAllGames = () => useContext(SetAllGamesContext);

// Provider that manages the list of games
export const AllGamesProvider = ({ children }) => {
  // State for storing the list of games
  const [games, setGames] = useState([]);

  // Function to fetch all games from the API and update the state
  const fetchGames = async () => {
    try {
      const { data } = await axiosReq.get("/games/");
      setGames(data);
    } catch (err) {
      // console.log(err);
    }
  };

  // useEffect hook to fetch games when the component mounts
  useEffect(() => {
    fetchGames();
  }, []);

  return (
    // Provide the games list and setGames function to child components
    <AllGamesContext.Provider value={games}>
      <SetAllGamesContext.Provider value={setGames}>
        {children}
      </SetAllGamesContext.Provider>
    </AllGamesContext.Provider>
  );
};
