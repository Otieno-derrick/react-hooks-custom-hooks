import { useState, useEffect } from "react";

function useQuery() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setIsLoaded(false);
    fetch("http://localhost:4000/posts")
      .then((r) => r.json())
      .then((posts) => {
        setPosts(posts);
        setIsLoaded(true);
      });
  }, []);
}

export default useQuery;