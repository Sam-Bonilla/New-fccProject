// import React from "react";
import React, { useState } from 'react';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux'
import { addPosts, selectPosts } from './postsSlice'

function Posts() {
  const [posts, setPosts] = React.useState([]);

    const select = useSelector(selectPosts);
    const dispatch = useDispatch(addPosts);
  //   const [incrementAmount, setIncrementAmount] = useState('0');

  React.useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const firstTen=response.data.slice(0,10)
        setPosts(firstTen)
      })
  }, []);


  return (
    
      <ul className="posts">
         {posts.map((post) => (
          <Card>
          <Card.Body> 
           <li className="post" key={post.id}>
             <h4>{post.title}</h4>
             <p>{post.body}</p>
           </li>
           </Card.Body>
        </Card>
         ))}
        </ul>
  );
}  
export default Posts;

  
