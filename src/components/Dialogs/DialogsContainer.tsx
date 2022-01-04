import Dialogs from './Dialogs'
import {actions} from "../../redux/dialogs-reducer";
import {connect} from 'react-redux'
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect.js'
import { AppStateType } from '../../redux/redux-store';


let mapStateToProps = (state: AppStateType) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

export default compose(
	connect(mapStateToProps, {...actions}),
	withAuthRedirect
	)(Dialogs);
;