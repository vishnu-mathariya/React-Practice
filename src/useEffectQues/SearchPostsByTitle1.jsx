import { useEffect, useRef, useState } from "react";
import axios from "axios";

export const SearchPostsByTitle1 = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

  const timeoutId = useRef(null);

  useEffect(() => {
    if (!search.trim()) return;

    const fetchPosts = async () => {
      setError(null);
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const filteredPosts = response.data.filter((Post) =>
          Post.title.toLowerCase().includes(search.toLowerCase()) && Post.userId === 1
    
        );
        const limitedPosts = filteredPosts.slice(0, 8);

        setPosts(limitedPosts);
      } catch (err) {
        console.log(err);
        setError("Error occured");
      } finally {
        setLoading(false);
      }
    };

    timeoutId.current = setTimeout(() => {
      fetchPosts();
    }, 900);

    return () => {
      clearTimeout(timeoutId.current);
    };
  }, [search]);

  const handleInput = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (!value.trim()) {
      setPosts([]);
      setError(null);
    }
  };
  return (
    <div>
      <h2>Search Posts By Title</h2>
      <input
        type="text"
        placeholder="Search title..."
        value={search}
        onChange={handleInput}
      />

      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : posts.length > 0 ? (
        <div>
          {posts.map((Post) => (
            <p key={Post.id}>
              Post ID:- {Post.id}
              <br />
              Post Title:- {Post.title}
              <br />
              Post Body:- {Post.body}
              <br />
              User ID:- {Post.userId}
            </p>
          ))}
        </div>
      ) : search ? (
        <p>No Post found</p>
      ) : null}
    </div>
  );
};
