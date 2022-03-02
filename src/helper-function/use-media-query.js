import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);  //query為輸入的size，比對之後media.matches會回傳true or false

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);

    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);

  }, [matches, query]);

  return matches;
}

export default useMediaQuery;