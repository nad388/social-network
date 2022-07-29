import React from 'react';
import styles from './Post.module.css';

const Post = () => {
  return (
    <div>
      <img
        className={styles.usersAva}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png"
        alt="usersAva"
      />
      post 1
    </div>
  );
};

export default Post;
