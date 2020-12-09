const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	messages: [
	{id: 1, message: 'Hi'},
	{id: 2, message: 'How is your business?'},
	{id: 3, message: 'Yo'},
	{id: 4, message: 'Yo'},
	{id: 5, message: 'Yo'},
	],
	dialogs: [
	{id: 1, name: 'Yakov'},
	{id: 2, name: 'Regina'},
	{id: 3, name: 'Renat'},
	{id: 4, name: 'YakKostyov'},
	{id: 5, name: 'Misha'},
	],
	newMessageBody: '',

};

const dialogsReducer = (state = initialState, action) => {

	switch(action.type) {

		case UPDATE_NEW_MESSAGE_BODY:
		return { 
			...state,
			newMessageBody: action.body
		};

		case SEND_MESSAGE:
		let body = state.newMessageBody;
		return { 
			...state,
			newMessageBody: '',
			messages: [...state.messages, {id: 6, message: body} ]
		};

		default:
		return state;

	}

}


export const sendMessageCreator = () => ({ type: SEND_MESSAGE	})
export const updateNewMessageBodyCreator = (body) => 
({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default dialogsReducer;
