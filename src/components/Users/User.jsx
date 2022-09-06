import React from 'react';
import styles from './Users.module.css';
import userAva from '../../assets/images/userAva.png';
import { NavLink } from 'react-router-dom';

const User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.userPhotos}>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img
              src={user.photos.small != null ? user.photos.small : userAva}
              alt="avaUser"
              className={styles.userPhoto}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              className={styles.btn}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              className={styles.btn}
              onClick={() => {
                follow(user.id);
              }}
            >
              follow
            </button>
          )}
        </div>
      </div>
      <div className={styles.infoUser}>
        <div className={styles.userName}>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </div>
        <div className={styles.userLocation}>
          <div>{'user.location.country'}</div>
          <div>{'user.location.city'}</div>
        </div>
      </div>
    </div>
  );
};

export default User;
