import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  maxLengthCreator,
  minLengthCreator,
  required,
} from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import styles from './Login.module.css';

const maxLength10 = maxLengthCreator(10);
const minLength3 = minLengthCreator(3);
const maxLengthPass16 = maxLengthCreator(16);
const minLengthPass5 = minLengthCreator(5);

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            placeholder={'Login'}
            component={Input}
            name={'login'}
            validate={[required, maxLength10, minLength3]}
          />
        </div>
        <div>
          <Field
            placeholder={'Password'}
            component={Input}
            name={'password'}
            validate={[required, maxLengthPass16, minLengthPass5]}
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
