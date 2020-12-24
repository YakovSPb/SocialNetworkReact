import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";



const MyPosts = (props) => {
 	let postsElement = props.posts.map( p => <Post message={p.message} count={p.count} />)

 	let newPostElement = React.createRef();

 	let onAddPost = (values) => {
 		props.addPost(values.newPostText);
 	}


	return (
		<div className={s.postsBlock}>
			<h3>My post</h3>

			<div className={s.posts}>
			<AddNewPostFormRedux onSubmit={onAddPost} />
				{postsElement}

			</div>
		</div>
		)
}

let AddNewPostForm  = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name="newPostText" component="textarea" />
				<div>
					<button>Add post</button>
				</div>
			</div>
		</form>
	)
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;