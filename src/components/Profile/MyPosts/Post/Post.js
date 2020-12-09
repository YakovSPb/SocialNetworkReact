import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
	return (
    <div className={s.item}>
    <img src="https://im0-tub-ru.yandex.net/i?id=77a3063ca4ff31316647633049e91b15&n=13" />
    {props.message}
    <div>
      <span>Like</span>{props.count}
    </div>
    </div>

    )
}

export default Post;