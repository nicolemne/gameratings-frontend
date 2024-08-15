import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";

// Fetches all the games from the /games/ endpoint so all
// games in the database can be displayed in a list or dropdown

export const AllGamesContext = createContext();
export const SetAllGamesContext = createContext();

export const useAllGames = () => useContext(AllGamesContext);
export const useSetAllGames = () => useContext(SetAllGamesContext);

export const AllGamesProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  const handleMount = async () => {
    try {
      const { data } = await axiosReq.get("/games/");
      setGames(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <AllGamesContext.Provider value={games}>
      <SetAllGamesContext.Provider value={setGames}>
        {children}
      </SetAllGamesContext.Provider>
    </AllGamesContext.Provider>
  );
};
