import { rerenderEntireTree } from '../render';

let state = {
  profilePage: {
    postsData: [
      { id: 1, message: 'I am dead!?', likesCount: 5 },
      { id: 2, message: 'Who killed Laura Palmer?', likesCount: 25 },
    ],
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
  },
  sidebar: [],
};

export const addPost = (postMessage) => {
  let newPost = {
    id: 3,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.postsData.push(newPost);
  rerenderEntireTree(state);
};

export const addMessage = (textMessage) => {
  let newMessage = {
    id: 7,
    message: textMessage,
  };
  state.dialogsPage.messagesData.push(newMessage);
  rerenderEntireTree(state);
};
export default state;
