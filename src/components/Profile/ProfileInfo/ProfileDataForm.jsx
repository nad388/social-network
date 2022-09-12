import React from 'react';
import {
  createField,
  Input,
  Textarea,
} from '../../common/FormsControls/FormsControls';
import styles from './ProfileInfo.module.css';
import style from '../../common/FormsControls/FormsControls.module.css';
import { reduxForm } from 'redux-form';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button className={styles.btn}>SAVE</button>
        {error && <div className={style.formSummaryError}>{error}</div>}
      </div>

      <div>
        <div>
          <b>Full name:</b> {createField('Full name', 'fullName', [], Input)}
        </div>
        <div>
          <b>Looking for a job:</b>
          {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
        </div>
        <div>
          <b>My professional skills:</b>
          {createField(
            'My professional skills',
            'lookingForAJobDescription',
            [],
            Textarea
          )}
        </div>
      </div>
      <div>
        <div>
          <b>About me:</b>
          {createField('About me', 'aboutMe', [], Textarea)}
        </div>
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={styles.contact}>
              <b>
                {key}: {createField(key, 'contacts.' + key, [], Input)}
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};
const ProfileDataFormReduxForm = reduxForm({
  form: 'editProfile',
  enableReinitialize: true,
  destroyOnUnmount: false,
})(ProfileDataForm);
export default ProfileDataFormReduxForm;
