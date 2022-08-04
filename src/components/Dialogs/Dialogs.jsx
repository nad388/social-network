import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: 'Lora Palmer' },
    { id: 2, name: 'Dale Cooper' },
    { id: 3, name: 'Liland Palmer' },
    { id: 4, name: 'Doppelganger' },
    { id: 5, name: 'Donna' },
    { id: 6, name: 'Lady with log' },
  ];

  let messagesData = [
    { id: 1, message: 'I am dead!?' },
    { id: 2, message: 'Who killed Lora Palmer?' },
    { id: 3, message: 'I killed my daughter!' },
    { id: 4, message: 'My name is Cooper.' },
    { id: 5, message: 'Where I am?' },
    { id: 6, message: 'My log always tells the truth.' },
  ];

  let dialogsElements = dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));
  let messagesElements = messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div>{dialogsElements}</div>
      </div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
