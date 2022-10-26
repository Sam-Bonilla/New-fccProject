// import React from "react";
import React, { useState } from 'react';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux'
import { addPosts, selectPosts } from './postsSlice'
import styles from './Posts.module.css';

function Posts() {
  // const [posts, setPosts] = React.useState([]); 

  
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();
    
    // const [incrementAmount, setIncrementAmount] = useState('0');

  // React.useEffect(() => {
  //   axios
  //     .get("http://jsonplaceholder.typicode.com/posts")
  //     .then((response) => {
  //       const firstTen=response.data.slice(0,10)
  //       setPosts(firstTen)
  //     })
  // }, []);


  return (

    <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Add Post"
          onClick={() => dispatch(addPosts())}
        >
          Add Post
        </button>
        <ul className="posts">
         {posts?.map((post) => (
          <Card>
          <Card.Body> 
           <li className="post" key={post.id}>
             <h4>{post.title}</h4>
             <p>{post.text}</p>
           </li>
           </Card.Body>
        </Card>
         ))}
        </ul>
    </div>
    
      
  );
}  
export default Posts;

  
