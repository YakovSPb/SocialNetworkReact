import {InferActionsTypes} from './redux-store'

type DialogType = {
	id: number,
	name: string
}
type MessageType = {
	id: number,
	message: string
}

let initialState = {
	messages: [
	{id: 1, message: 'Hi'},
	{id: 2, message: 'How is your business?'},
	{id: 3, message: 'Yo'},
	{id: 4, message: 'Yo'},
	{id: 5, message: 'Yo'},
	] as Array<MessageType>,
	dialogs: [
	{id: 1, name: 'Yakov'},
	{id: 2, name: 'Regina'},
	{id: 3, name: 'Renat'},
	{id: 4, name: 'YakKostyov'},
	{id: 5, name: 'Misha'},
	] as Array<DialogType>
}


const dialogsReducer = (state = initialState, action: ActionsType):initialStateType => {

	switch(action.type) {


		case 'SN/DIALOGS/SEND-MESSAGE':
		let body = action.newMessageBody;
		return {
			...state,
			messages: [...state.messages, {id: 6, message: body} ]
		};

		default:
		return state;

	}

}

export const actions = {
	sendMessageCreator: (newMessageBody: string) => ({ type: 'SN/DIALOGS/SEND-MESSAGE', newMessageBody} as const)
}


export default dialogsReducer;

export type initialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>