import React from 'react';
import Message from './Message/Message'
import Dialogs from './Dialogs'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {connect} from 'react-redux'
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect.js'


let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
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



export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
	)(Dialogs);
;