const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
  postsData: [
    { id: 1, message: 'I am dead!?', likesCount: 5 },
    { id: 2, message: 'Who killed Laura Palmer?', likesCount: 25 },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
      };
      state.postsData.push(newPost); // profilePage приходит под именем state
      state.newPostText = ''; // очищаем поле в state
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

// export const addPostActionCreator = () => {
//   return {
//     type: ADD_POST,
//   };
// };
export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export default profileReducer;
