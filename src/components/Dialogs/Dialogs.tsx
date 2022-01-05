import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import {Redirect} from 'react-router-dom';
import AddMessageFrom from './AddMessageForm';
import { InitialStateType } from '../../redux/dialogs-reducer';

type PropsType = {
	dialogsPage: InitialStateType
	sendMessage: (newMessageBody: string) => void
	isAuth: boolean
}

export type NewMessageFormValuesType = {
	newMessageBody: string
}



const Dialogs: React.FC<PropsType> = (props) => {

	let state = props.dialogsPage;

 	let dialogsElements = state.dialogs.map(e => <DialogItem name={e.name} key={e.id} id={e.id} />);
 	let messagesElements = state.messages.map(m => 	<Message message={m.message} key={m.id} />)

 	let addNewMessage = (values: NewMessageFormValuesType) => {
		props.sendMessage(values.newMessageBody);
 	}

	return (
			<div className={s.dialogs}>
				<div className={s.dialogsItems}>
					{dialogsElements}
				</div>
				<div className={s.messages}>
					<div>{messagesElements}</div>
				</div>
				<AddMessageFrom onSubmit={addNewMessage} />
				</div>
		)
}



export default Dialogs;