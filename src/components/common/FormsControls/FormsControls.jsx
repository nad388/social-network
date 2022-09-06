import React from 'react';
import { Field } from 'redux-form';
import styles from './FormsControls.module.css';

const FormControl = ({ input, meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <div>{children}</div>
      <div>{hasError && <span>{error}</span>}</div>
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = ''
) => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        component={component}
        name={name}
        validate={validators}
        {...props}
      />
      {text}
    </div>
  );
};
