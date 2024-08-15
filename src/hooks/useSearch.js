import { useEffect, useRef, useState } from "react";

const useSearch = (initialState = '') => {
  const [searchQuery, setSearchQuery] = useState(initialState);
  const ref = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setSearchQuery('');
      }
    };

    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref]);

  return { searchQuery, setSearchQuery, ref };
};

export default useSearch;
