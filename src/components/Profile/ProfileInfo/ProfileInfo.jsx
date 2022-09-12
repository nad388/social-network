import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import userAva from '../../../assets/images/userAva.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks ';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  } else {
    const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
        savePhoto(e.target.files[0]);
      }
    };
    return (
      <div>
        <div>
          <img
            className={styles.userAvatar}
            src={profile.photos.large || userAva}
            alt="userAvatar"
          />
        </div>
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
        <div className={styles.descriptionBlock}>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
    );
  }
};

export default ProfileInfo;
