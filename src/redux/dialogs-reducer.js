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
	]
};

const dialogsReducer = (state = initialState, action) => {

	switch(action.type) {


		case SEND_MESSAGE:
		let body = action.newMessageBody;
		return {
			...state,
			messages: [...state.messages, {id: 6, message: body} ]
		};

		default:
		return state;

	}

}


export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody	})


export default dialogsReducer;
