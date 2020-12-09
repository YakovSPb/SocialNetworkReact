import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
	_state: {
		profilePage: {
			posts: [
			{id: 1, message: 'Hi, how are you', count: 12},
			{id: 2, message: 'It\'s my first post', count: 11},
			],
			newPostText: 'prospekt.pro'
		},
		dialogsPage: {
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
			newMessageBody: ''

		},
		sidebar: {

		}
	},

	_callSubscriber () {
		console.log('State was changed');
	},

	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},


	dispatch(action) {

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);

	}

}




export default store;

window.store = store;
