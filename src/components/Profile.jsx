import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img
          className={styles.userAvatar}
          src="https://previews.123rf.com/images/panyamail/panyamail1809/panyamail180900343/109879063-user-avatar-icon-sign-profile-symbol.jpg"
          alt="userAvatar"
        />
      </div>
      <div>ava + description</div>
      <div>
        MyPosts
        <div>New post</div>
        <div>post 1</div>
        <div>post 2</div>
      </div>
    </div>
  );
};

export default Profile;
