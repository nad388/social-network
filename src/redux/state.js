import { rerenderEntireTree } from '../render';

let state = {
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
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = ''; // очищаем поле в state
  rerenderEntireTree(state);
};

export const addMessage = () => {
  let newMessage = {
    id: 7,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messagesData.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const updateNewMessageText = (newTextMessage) => {
  state.dialogsPage.newMessageText = newTextMessage;
  rerenderEntireTree(state);
};

export default state;
