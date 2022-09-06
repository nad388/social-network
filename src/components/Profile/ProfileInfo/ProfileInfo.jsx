import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks ';

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  } else {
    return (
      <div>
        <div>
          <img
            className={styles.userAvatar}
            src={profile.photos.large}
            alt="userAvatar"
          />
        </div>
        <div className={styles.descriptionBlock}>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
    );
  }
};

export default ProfileInfo;
