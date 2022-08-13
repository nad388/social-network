import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };
  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };
  return (
    <StoreContext.Consumer>
      {(store) => (
        <MyPosts
          updateNewPostText={onPostChange}
          addPost={addPost}
          postsData={state.profilePage.postsData}
          newPostText={state.profilePage.newPostText}
        />
      )}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
