import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './Login.module.css';

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={'Login'} component={'input'} name={'login'} />
        </div>
        <div>
          <Field
            placeholder={'Password'}
            component={'input'}
            name={'password'}
          />
        </div>
        <div>
          <Field type={'checkbox'} component={'input'} name={'rememberMe'} />
          remember me
        </div>
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
    console.log(formData);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
