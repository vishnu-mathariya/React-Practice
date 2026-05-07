// import React, { useState } from "react";

// export const LoadpostsWithPagination = () => {
//   const [error, setError] = useState(null);
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1)

//   function fetchPosts() {
//     setError(null);
//     setLoading(true);
    
//     fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Response is not okk");
//         }
//         return res.json();
//       })
//       .then((data) => {

//         // append old posts + new posts
//         setPosts((prev)=>[...prev, ...data])

//         // increase page
//         setPage((prev) => prev + 1)
//       })
//       .catch((err) => {
//         console.log(err);
//         setError("Something went wrong");
//       })
//       .finally(() => setLoading(false));
//   }

//   return (
//     <div>
//       <h2>Posts with Pagination</h2>
//       <button onClick={fetchPosts}>Load More</button>

//       {error ? (
//         <p>{error}</p>
//       ) : loading ? (
//         <p>Loading...</p>
//       ) : posts.length > 0 ? (
//         <ul>
//           {posts.map((Post) => (
//             <li key={Post.id}>{Post.title}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No post found</p>
//       )}
//     </div>
//   );
// };



/////////////////////////////////////////////////////



import React, { useState } from 'react'

export const LoadpostsWithPagination = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] =useState(false)
    const [page, setPage] = useState(1)
    const [error, setError] = useState(null)


    const fetchPosts = () =>{

        setError(null)
        setLoading(true)

        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)

        .then((res) => {
            if(!res.ok){
                throw new Error("Response is not okk")
            }
            return res.json()
        })
        .then((data) =>{
            setPosts((prev) => [...prev, ...data])
            setPage((prev) => prev + 1)
        })
        .catch((err) =>{
            console.log(err);
            setError("Error Occur")
            
        })
        .finally(() => setLoading(false))
    }
      return (
    <div>
        <h2>Posts with Pagination</h2>
        <button onClick={fetchPosts}>Load More</button>

        {error ? (
            <p>{error}</p>
        ) : loading ? (
            <p>Loading...</p>
        ): posts.length < 0 ? (

            <ul>
                {posts.map((Post) =>(
                    <li key={Post.id}>{Post.title}</li>
                ))}
            </ul>
        ) : <p>Not Found</p>}

    </div>
  )
}
