import React, { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import userAva from '../../../assets/images/userAva.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks ';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  } else {
    const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
        savePhoto(e.target.files[0]);
      }
    };
    const onSubmit = (formData) => {
      saveProfile(formData).then((response) => {
        if (!response) return setEditMode(false);
      });
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
        {editMode ? (
          <ProfileDataForm
            initialValues={profile}
            profile={profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            goToEditMode={() => {
              setEditMode(true);
            }}
            profile={profile}
            isOwner={isOwner}
          />
        )}
      </div>
    );
  }
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button className={styles.btn} onClick={goToEditMode}>
            EDIT
          </button>
        </div>
      )}
      <div>
        <b>Full name:</b> {profile.fullName}
      </div>
      <div>
        <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      <div>
        {profile.lookingForAJob && (
          <div>
            <b>My professional skills:</b>
            {profile.lookingForAJobDescription}
          </div>
        )}
      </div>
      <div>
        <b>About me:</b> {profile.aboutMe}
      </div>
      <div className={styles.contactTitle}>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b className={styles.contact}>{contactTitle}: </b>
      {contactValue}
    </div>
  );
};

export default ProfileInfo;
