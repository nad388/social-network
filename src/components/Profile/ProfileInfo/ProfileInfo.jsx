import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  } else {
    return (
      <div>
        <div>
          <img
            className={styles.userAvatar}
            src={props.profile.photos.large}
            alt="userAvatar"
          />
        </div>
        <div className={styles.descriptionBlock}>
          <ProfileStatus status={'Hello Doppelganger'} />
        </div>
      </div>
    );
  }
};

export default ProfileInfo;
