import React from 'react';
import styles from './Users.module.css';
import userAva from '../../assets/images/userAva.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (
    let i = Math.max(props.currentPage - 5, 1);
    i <= Math.max(1, Math.min(props.currentPage + 5, pagesCount));
    i++
  ) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p ? styles.selectedPage : ''}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
              key={p}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id} className={styles.wrapper}>
          <div className={styles.userPhotos}>
            <div>
              <NavLink to={`/profile/${u.id}`}>
                <img
                  src={u.photos.small != null ? u.photos.small : userAva}
                  alt="avaUser"
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  className={styles.btn}
                  onClick={() => {
                    props.toggleFollowingProgress(true, u.id);
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            'API-KEY': 'a162c066-ea4f-4541-83aa-816acb7cd8bc',
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  className={styles.btn}
                  onClick={() => {
                    props.toggleFollowingProgress(true, u.id);
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            'API-KEY': 'a162c066-ea4f-4541-83aa-816acb7cd8bc',
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id);
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });
                  }}
                >
                  follow
                </button>
              )}
            </div>
          </div>
          <div className={styles.infoUser}>
            <div className={styles.userName}>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </div>
            <div className={styles.userLocation}>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
