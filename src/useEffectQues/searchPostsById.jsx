// import React, { useState } from 'react'

// export const SearchPostsById = () => {

//     const [loading, setLoading] = useState(false)
//     const [id, setId] = useState("")
//     const [posts, setPosts] = useState([])
//     const [error, setError] = useState(null)

//     const fetchPosts = () => {
//         setError(null)
//         setLoading(true)
//         setPosts([])

//         fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
//             .then((res) => {
//                 if (!res.ok) {
//                     throw new Error("Res is not okk")
//                 }
//                 return res.json()
//             })
//             .then((data) => {
//                 setPosts(data)
//             })
//             .catch((err) => {
//                 console.log(err)
//                 setError("Something went wrong")
//             })
//             .finally(() => setLoading(false))
//     }

//     return (
//         <div>
//             <h2>Search posts by user ID</h2>

//             <input
//                 type='text'
//                 placeholder='Enter user post id'
//                 value={id}
//                 onChange={(e) => setId(e.target.value)}
//             />
//             <button onClick={fetchPosts}>Get Posts</button>

//             {error ? (
//                 <p>{error}</p>
//             ) : loading ? (
//                 <p>Loading...</p>
//             ) :  posts.length > 0 ? (
//                 <ul>
//                     {posts.map((post) => (
//                         <li key={post.id}>{post.title}</li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>No posts found</p>
//             )}
//         </div>
//     )
// }

///////////////////////////////////////////////

import React, { useState } from "react";

export const SearchPostsById = () => {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    setPosts([]);
    setError(null);
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Response is not okk");
        }
       return  res.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
        setError("Something went wrong");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h2>Search posts by user ID</h2>

      <input
        type="text"
        value={id}
        placeholder="Enter user ID"
        onChange={(e) => setId(e.target.value)}
      />

      <button onClick={fetchPosts}>Get Posts</button>

      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : posts.length > 0 ? (
        <ul>
          {posts.map((Post) => (
            <li key={Post.id}>{Post.title}</li>
          ))}
        </ul>
      ) : (
        <p>No post found</p>
      )}
    </div>
  );
};
