import Dialogs from './Dialogs'
import {actions} from "../../redux/dialogs-reducer";
import {connect} from 'react-redux'
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { AppStateType } from '../../redux/redux-store';
import React from 'react';


let mapStateToProps = (state: AppStateType) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

export default compose<React.ComponentType>(
	connect(mapStateToProps, {...actions}),
	withAuthRedirect
	)(Dialogs);
;