let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'I am dead!?', likesCount: 5 },
        { id: 2, message: 'Who killed Laura Palmer?', likesCount: 25 },
      ],
      newPostText: 'Enter post...',
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
      newMessageText: 'Enter your message...',
    },
    sidebar: [],
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state changed');
  },
  addPost() {
    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = ''; // очищаем поле в state
    this._callSubscriber(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 7,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messagesData.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newTextMessage) {
    this._state.dialogsPage.newMessageText = newTextMessage;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;
