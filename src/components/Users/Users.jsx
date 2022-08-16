import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoURL:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/800px-User-avatar.svg.png',
        followed: true,
        fullName: 'Nadezhda',
        status: 'I am Doppelganger!',
        location: { country: 'Russia', city: 'Saint-Petersburg' },
      },
      {
        id: 2,
        photoURL:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/800px-User-avatar.svg.png',
        followed: false,
        fullName: 'Laura',
        status: 'I am dead!',
        location: { country: 'USA', city: 'Twin Peaks' },
      },
      {
        id: 3,
        photoURL:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/800px-User-avatar.svg.png',
        followed: true,
        fullName: 'Cooper',
        status: 'Who killed Laura Palmer',
        location: { country: 'USA', city: 'Twin Peaks' },
      },
      {
        id: 4,
        photoURL:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/800px-User-avatar.svg.png',
        followed: false,
        fullName: 'Doppelganger',
        status: 'I am!',
        location: { country: 'France', city: 'Paris' },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id} className={styles.wrapper}>
          <div className={styles.userPhotos}>
            <div>
              <img
                src={u.photoURL}
                alt="avaUser"
                className={styles.userPhoto}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  className={styles.btn}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  className={styles.btn}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  follow
                </button>
              )}
            </div>
          </div>
          <div className={styles.infoUser}>
            <div className={styles.userName}>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </div>
            <div className={styles.userLocation}>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
