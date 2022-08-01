import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  return (
    <div className={styles.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={styles.posts}>
        <Post message="Hello, I am Doppelganger!" likesCount="5" />
        <Post message="Who killed Lora Palmer?" likesCount="25" />
      </div>
    </div>
  );
};

export default MyPosts;
