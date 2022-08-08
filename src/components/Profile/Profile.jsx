import React from 'react';
import MyPosts from './MyPosts/MyPosts';
// import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        postsData={props.profilePage.postsData}
        newPostText={props.profilePage.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
