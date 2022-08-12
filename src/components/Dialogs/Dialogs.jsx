import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Button from '../Buttons/SendMessageButton';
const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));
  let messagesElements = props.dialogsPage.messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  let newMessageText = props.dialogsPage.newMessageText;

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div>{dialogsElements}</div>
      </div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              placeholder="Enter your message..."
              onChange={onMessageChange}
              value={newMessageText}
            ></textarea>
          </div>
          <div>
            <Button dispatch={props.dispatch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
