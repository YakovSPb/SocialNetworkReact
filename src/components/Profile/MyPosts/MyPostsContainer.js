import React from 'react';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostNextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts'
import {connect} from 'react-redux'


const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostTex
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (text) => {
			let action = updateNewPostNextActionCreator(text)
			dispatch(action);
		},
		addPost: () => {
			dispatch(addPostActionCreator());
		}
	}
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;