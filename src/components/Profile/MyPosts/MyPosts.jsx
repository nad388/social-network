import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.postsData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    //  props.addPost();
    props.dispatch({ type: 'ADD_POST' });
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    props.dispatch({ type: 'UPDATE_NEW_POST_TEXT', newText: text });
  };
  return (
    <div className={styles.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={styles.posts}>
        <div>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
