import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
