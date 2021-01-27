import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
	posts: [
		{id: 1, message: 'Hi, how are you', count: 12},
		{id: 2, message: 'It\'s my first post', count: 11},
	]
};


it('length of post shoild be incremented', () => {
	// 1. test data
	let action = addPostActionCreator("Prospekt.pro");

	// 2. action
	let newState = profileReducer(state, action)

	// 3. expectation
	expect(newState.posts.length).toBe(3);
});


it('after deleting length of messages shoild be decreameant', () => {
	// 1. test data
	let action = deletePost(1);

	// 2. action
	let newState = profileReducer(state, action)

	// 3. expectation
	expect(newState.posts.length).toBe(1);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
	// 1. test data
	let action = deletePost(1000);

	// 2. action
	let newState = profileReducer(state, action)

	// 3. expectation
	expect(newState.posts.length).toBe(2);
});



it('message of new post should be correct', () => {
	// 1. test data
	let action = addPostActionCreator("Prospekt.pro");

	// 2. action
	let newState = profileReducer(state, action)

	// 3. expectation
	expect(newState.posts[2].message).toBe("Prospekt.pro");
});


