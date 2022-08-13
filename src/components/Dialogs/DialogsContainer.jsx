import React from 'react';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogsReducer';
import StoreContext from '../../StoreContext';

import Dialogs from './Dialogs';
const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>{(store) => {
        let addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        let onMessageChange = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };

        return (
          <Dialogs
            updateNewMessageText={onMessageChange}
            addMessage={addMessage}
            dialogsPage={store.getState().dialogsPage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
