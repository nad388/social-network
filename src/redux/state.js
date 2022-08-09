const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'I am dead!?', likesCount: 5 },
        { id: 2, message: 'Who killed Laura Palmer?', likesCount: 25 },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: 'Laura Palmer' },
        { id: 2, name: 'Dale Cooper' },
        { id: 3, name: 'Liland Palmer' },
        { id: 4, name: 'Doppelganger' },
        { id: 5, name: 'Donna' },
        { id: 6, name: 'Lady with log' },
      ],

      messagesData: [
        { id: 1, message: 'I am dead!?' },
        { id: 2, message: 'Who killed Laura Palmer?' },
        { id: 3, message: 'I killed my daughter!' },
        { id: 4, message: 'My name is Cooper.' },
        { id: 5, message: 'Where I am?' },
        { id: 6, message: 'My log always tells the truth.' },
      ],
      newMessageText: '',
    },
    sidebar: [],
  },
  _callSubscriber() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = ''; // очищаем поле в state
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 7,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messagesData.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newTextMessage;
      this._callSubscriber(this._state);
    }
  },
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

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newTextMessage: text,
});

export default store;
window.store = store;
