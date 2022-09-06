import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  maxLengthCreator,
  minLengthCreator,
  required,
} from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength30 = maxLengthCreator(30);
const minLength2 = minLengthCreator(2);

const MyPosts = React.memo((props) => {
  let postsElements = props.postsData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  // let newPostElement = React.createRef();

  // let onAddPost = () => {
  //   props.addPost();
  // };

  // let onPostChange = () => {
  //   let text = newPostElement.current.value;
  //   props.updateNewPostText(text);
  // };

  const addNewPost = (values) => {
    props.addPost(values.newPostText);
  };
  return (
    <div className={styles.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>{postsElements}</div>
      </div>
      <AddPostFormRedux onSubmit={addNewPost} />
    </div>
  );
});

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.posts}>
        <Field
          component={Textarea}
          name={'newPostText'}
          placeholder="Enter post..."
          validate={[required, maxLength30, minLength2]}
        />
      </div>
      <div>
        <button className={styles.btn}>Add post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({
  form: 'profileAddPostForm',
})(AddPostForm);

export default MyPosts;
