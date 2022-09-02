import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
  maxLengthCreator,
  minLengthCreator,
  required,
} from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import styles from './Login.module.css';
import style from '../common/FormsControls/FormsControls.module.css';
import { login } from '../../redux/authReducer';
import { Navigate } from 'react-router-dom';

const maxLength30 = maxLengthCreator(30);
const minLength3 = minLengthCreator(3);
const maxLengthPass16 = maxLengthCreator(16);
const minLengthPass5 = minLengthCreator(5);

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            placeholder={'Email'}
            component={Input}
            name={'email'}
            validate={[required, maxLength30, minLength3]}
          />
        </div>
        <div>
          <Field
            placeholder={'Password'}
            component={Input}
            name={'password'}
            type={'password'}
            validate={[required, maxLengthPass16, minLengthPass5]}
          />
        </div>
        <div>
          <Field type={'checkbox'} component={'input'} name={'rememberMe'} />
          remember me
        </div>
        {props.error && <div className={style.formSummaryError}>{props.error}</div>}
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
