import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          className={styles.userAvatar}
          src="https://previews.123rf.com/images/panyamail/panyamail1809/panyamail180900343/109879063-user-avatar-icon-sign-profile-symbol.jpg"
          alt="userAvatar"
        />
      </div>
      <div className={styles.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
