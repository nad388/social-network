// import React from 'react';
import { connect } from 'react-redux';
// import { withAuthRedirect } from '../../HOC/WithAuthRedirect';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogsReducer';

import Dialogs from './Dialogs';
// const DialogsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let addMessage = () => {
//           store.dispatch(addMessageActionCreator());
//         };

//         let onMessageChange = (text) => {
//           store.dispatch(updateNewMessageTextActionCreator(text));
//         };

//         return (
//           <Dialogs
//             updateNewMessageText={onMessageChange}
//             addMessage={addMessage}
//             dialogsPage={store.getState().dialogsPage}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

// const AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
