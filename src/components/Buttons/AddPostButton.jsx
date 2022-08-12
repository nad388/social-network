import React from 'react';
import { addPostActionCreator } from '../../redux/profileReducer';
import styles from './Button.module.css';
const addPostButton = (props) => {
  let addPost = () => {
    //  props.addPost();
    props.dispatch(addPostActionCreator());
  };
  return (
    <button onClick={addPost} className={styles.btn}>
      Add post
    </button>
  );
};

export default addPostButton;
