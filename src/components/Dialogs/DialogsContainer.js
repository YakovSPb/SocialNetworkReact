import React from 'react';
import Message from './Message/Message'
import Dialogs from './Dialogs'
import {actions} from "../../redux/dialogs-reducer";
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
		sendMessage: (newMessageBody) => {
				dispatch(actions.sendMessageCreator(newMessageBody));
		}
	}
}



export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
	)(Dialogs);
;