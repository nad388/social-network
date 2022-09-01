import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import {
  maxLengthCreator,
  minLengthCreator,
  required,
} from '../../utils/validators/validators';

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));
  let messagesElements = state.messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  const addNewMessage = (values) => {
    props.addMessage(values.newMessageText);
  };
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div>{dialogsElements}</div>
      </div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};
const maxLength100 = maxLengthCreator(100);
const minLength2 = minLengthCreator(2);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={'newMessageText'}
          placeholder="Enter your message..."
          validate={[required, maxLength100, minLength2]}
        />
      </div>
      <div>
        <button className={styles.btn}>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({
  form: 'dialogAddMessageForm',
})(AddMessageForm);

export default Dialogs;
