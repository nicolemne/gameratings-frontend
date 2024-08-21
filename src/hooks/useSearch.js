// React imports
import { useEffect, useRef, useState } from "react";

// useSearch is a custom hook for search queries inside dropdowns. 
// Used in: AddGame.js & PostCreateForm.js dropdowns

const useSearch = (initialState = '') => {
  // State hook for storing the current search query
  const [searchQuery, setSearchQuery] = useState(initialState);
  
  const ref = useRef(null);
  
  // This useEffect hook handles clearing the search input when 
  // clicking outside the search
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setSearchQuery('');
      }
    };

    // Add event listener for click events
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      // Clear event listener on component unmount
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref]);

  return { searchQuery, setSearchQuery, ref };
};

export default useSearch;
