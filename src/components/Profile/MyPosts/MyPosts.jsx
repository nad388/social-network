import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsData = [
    { id: 1, message: 'I am dead!?', likesCount: 5 },
    { id: 2, message: 'Who killed Lora Palmer?', likesCount: 25 },
  ];
  let postsElements = postsData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));
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
        <div>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
