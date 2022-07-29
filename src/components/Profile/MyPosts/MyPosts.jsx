import React from 'react';
// import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <textarea></textarea>
      <div>
        <button>Add post</button>
      </div>
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
