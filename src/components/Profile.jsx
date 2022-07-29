import React from 'react';

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img
          className="userAvatar"
          src="https://previews.123rf.com/images/panyamail/panyamail1809/panyamail180900343/109879063-user-avatar-icon-sign-profile-symbol.jpg"
          alt="userAvatar"
        />
      </div>
      <div>ava + description</div>
      <div>
        MyPosts
        <div>New post</div>
        <div>post 1</div>
        <div>post 2</div>
      </div>
    </div>
  );
};

export default Profile;
