import React from 'react';
import styles from './Post.module.css';
import userAva from '../../../../assets/images/userAva.png';

const Post = (props) => {
  return (
    <div>
      <img className={styles.usersAva} src={userAva} alt="usersAva" />
      {props.message}
      <div>like: {props.likesCount}</div>
    </div>
  );
};

export default Post;
