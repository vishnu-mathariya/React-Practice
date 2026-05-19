// import axios from "axios";
// import { comment } from "postcss";
// import React, { useEffect, useRef, useState } from "react";

// export const SearchCommentsByEmail = () => {
//   const [error, setError] = useState(null);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [comments, setComments] = useState([]);

//   const timeoutRef = useRef(null);

//   useEffect(() => {

//     if(!search.trim()) return;
//     const fetchComments = async () => {
//       setError(null);
//       setLoading(true);

//       try {
//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/comments",
//         );

//         const filteredComments = response.data.filter(() =>
//           comment.email.toLowerCase().includes(search.toLowerCase()),
//         );
//         const limitedComments = filteredComments.slice(0, 7);
//         setComments(limitedComments);
//       } catch (err) {
//         console.log(err);
//         setError("Error occured");
//       } finally {
//         setLoading(false);
//       }
//     };

//     timeoutRef.current = setTimeout(() => {
//       fetchComments();
//     }, 800);

//     return () => {
//       clearTimeout(timeoutRef.current);
//     };
//   }, [search]);

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setSearch(value);

//     if (!value.trim()) {
//       setComments([]);
//       setError(null);
//     }
//   };

//   return (
//     <div>
//       <h2>Search Comments by Email</h2>
//       <input
//         type="text"
//         placeholder="Type email..."
//         value={search}
//         onChange={handleChange}
//       />

//       {error ? (
//         <p>{error}</p>
//       ) : loading ? (
//         <p>Loading...</p>
//       ) : comments.length > 0 ? (
//         <div>
//           {comments.map((comment) => (
//             <div key={comment.id}>
//               Name : {comment.name}
//               Email : {comment.email}
//               Comments : {comment.body}
//               <hr />
//             </div>
//           ))}
//         </div>
//       ) : search ? (
//         <p>No comments found</p>
//       ) : null}
//     </div>
//   );
// };

////////////////////////////////////////////////

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRef } from "react";

export const SearchCommentsByEmail = () => {
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);

  const timeoutRef = useRef(null);
  useEffect(() => {
    if (!search.trim()) return;
    const fetchComments = async () => {
      setError(null);
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments",
        );

        const filteredComments = response.data.filter((comment) =>
          comment.email.toLowerCase().includes(search.toLowerCase()),
        );

        const limitedComments = filteredComments.slice(0, 7);
        setComments(limitedComments);
      } catch (err) {
        console.log(err);
        setError("Error occured");
      } finally {
        setLoading(false);
      }
    };

    timeoutRef.current = setTimeout(() => {
      fetchComments();
    }, 800);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [search]);

  const handleChanage = (e) => {
    const value = e.target.value;

    setSearch(value);

    if (!value.trim()) {
      setError(null);
      setComments([]);
    }
  };

  return (
    <div>
      <h2>Search Comments By Email</h2>
      <input
        type="text"
        placeholder="Enter email..."
        value={search}
        onChange={handleChanage}
      />

      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              Name : {comment.name}
              <br />
              Email : {comment.email}
              <br />
              Comments : {comment.body}
              <hr />
            </li>
          ))}
        </ul>
      ) : search ? (
        <p>No comments found</p>
      ) : null}
    </div>
  );
};
