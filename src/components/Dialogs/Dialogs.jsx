import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem name="Lora Palmer" id="1" />
        <DialogItem name="Dale Cooper" id="2" />
        <DialogItem name="Liland Palmer" id="3" />
        <DialogItem name="Doppelganger" id="4" />
        <DialogItem name="Donna" id="5" />
        <DialogItem name="Lady with log" id="6" />
      </div>
      <div className={styles.messages}>
        <Message message="I am dead!?" />
        <Message message="Who killed Lora Palmer?" />
        <Message message="I killed my daughter!" />
        <Message message="My name is Cooper." />
        <Message message="Where I am?" />
        <Message message="My log always tells the truth." />
      </div>
    </div>
  );
};

export default Dialogs;
