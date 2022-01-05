import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validator/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import AddPostForm, { AddPostFormValuesType } from './AddPostForm/AddPostForm';
import { PostType } from '../../../types/types';


export type MapPropsType = {
	posts: Array<PostType>
}

export type DispatchPropsType = {
	addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = props => {

	let postsElement = [...props.posts]
		.reverse()
		.map(p => <Post key={p.id} message={p.message} count={p.count}/>)

	let onAddPost = (values: AddPostFormValuesType) => {
		props.addPost(values.newPostText);
	}

	return (
		<div className={s.postsBlock}>
			<h3>My post</h3>

			<div className={s.posts}>
				<AddPostForm onSubmit={onAddPost}/>
				{postsElement}

			</div>
		</div>
	)
}


const MyPostsMemorized = React.memo(MyPosts);

export default MyPostsMemorized;