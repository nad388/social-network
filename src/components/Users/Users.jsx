import axios from 'axios';
import React from 'react';
import styles from './Users.module.css';
import userAva from '../../assets/images/userAva.png';

class Users extends React.Component {
  getUsers = () => {
    if (this.props.users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.getUsers}>Get Users</button>
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
