import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));
  let messagesElements = state.messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  let newMessageText = state.newMessageText;

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
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
            <button className={styles.btn} onClick={addMessage}>
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
