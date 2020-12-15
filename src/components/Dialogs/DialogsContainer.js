import React from 'react';
import Message from './Message/Message'
import Dialogs from './Dialogs'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
		isAuth: state.auth.isAuth
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => {
				dispatch(sendMessageCreator());
		},
		updateNewMessageBody: (body) => {
				dispatch(updateNewMessageBodyCreator(body));
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;