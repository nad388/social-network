import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import {
  maxLengthCreator,
  minLengthCreator,
  required,
} from '../../utils/validators/validators';
import { createField, Input } from '../common/FormsControls/FormsControls';
import styles from './Login.module.css';
import style from '../common/FormsControls/FormsControls.module.css';
import { login } from '../../redux/authReducer';
import { Navigate } from 'react-router-dom';

const maxLength30 = maxLengthCreator(30);
const minLength3 = minLengthCreator(3);
const maxLengthPass16 = maxLengthCreator(16);
const minLengthPass5 = minLengthCreator(5);

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {createField(
          'Email',
          'email',
          [required, maxLength30, minLength3],
          Input
        )}
        {createField(
          'Password',
          'password',
          [required, maxLengthPass16, minLengthPass5],
          Input,
          { type: 'password' }
        )}
        {createField(
          null,
          'rememberMe',
          [],
          'input',
          { type: 'checkbox' },
          'rememberMe'
        )}

        {error && <div className={style.formSummaryError}>{error}</div>}
        <div>
          <button className={styles.btn}>Login</button>
        </div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={'/profile'} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
