import axios from 'axios';
import React from 'react';
import styles from './Users.module.css';
import userAva from '../../assets/images/userAva.png';

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pages = [];
    for (
      let i = Math.max(this.props.currentPage - 5, 1);
      i <= Math.max(1, Math.min(this.props.currentPage + 5, pagesCount));
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
                className={
                  this.props.currentPage === p ? styles.selectedPage : ''
                }
                onClick={(e) => {
                  this.onPageChanged(p);
                }}
                key={p}
              >
                {p}
              </span>
            );
          })}
        </div>
        {this.props.users.map((u) => (
          <div key={u.id} className={styles.wrapper}>
            <div className={styles.userPhotos}>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : userAva}
                  alt="avaUser"
                  className={styles.userPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    className={styles.btn}
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    className={styles.btn}
                    onClick={() => {
                      this.props.follow(u.id);
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
  }
}

export default Users;
