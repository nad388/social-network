import React from 'react';
// import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  return (
    <div>
      <textarea></textarea>
      <div>
        <button>Add post</button>
      </div>
      <Post message="Hello, I am Doppelganger!" likesCount="5" />
      <Post message="Who killed Lora Palmer?" likesCount="25" />
    </div>
  );
};

export default MyPosts;
