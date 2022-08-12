import React from 'react';
import { addMessageActionCreator } from '../../redux/dialogsReducer';
import styles from './Button.module.css';

const SendMessageButton = (props) => {
  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };
  return (
    <button className={styles.btn} onClick={addMessage}>
      Send message
    </button>
  );
};

export default SendMessageButton;
