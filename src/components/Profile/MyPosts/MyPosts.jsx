import React from 'react';
import { updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import Button from '../../Buttons/AddPostButton';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.postsData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  let newPostElement = React.createRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    props.dispatch(updateNewPostTextActionCreator(text));
  };
  return (
    <div className={styles.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <textarea
          placeholder="Enter post..."
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
      </div>
      <div>
        <Button dispatch={props.dispatch} />
      </div>
      <div className={styles.posts}>
        <div>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
