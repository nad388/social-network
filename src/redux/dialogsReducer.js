const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        newMessageText: '',
        messagesData: [
          ...state.messagesData,
          {
            id: 7,
            message: state.newMessageText,
          },
        ],
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.newTextMessage };
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newTextMessage: text,
});
export default dialogsReducer;
