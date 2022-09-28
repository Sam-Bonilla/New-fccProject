import React from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';

function Posts() {
  const [posts, setPosts] = React.useState([]);

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

  
