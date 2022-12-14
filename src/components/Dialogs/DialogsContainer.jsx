// import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/WithAuthRedirect';
import { addMessageActionCreator } from '../../redux/dialogsReducer';

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
    addMessage: (newMessageText) => {
      dispatch(addMessageActionCreator(newMessageText));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
