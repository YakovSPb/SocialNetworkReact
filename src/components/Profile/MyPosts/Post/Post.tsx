import React from 'react';
import { PostType } from '../../../../types/types';
import s from './Post.module.css'

type PropsType = {
  message: string
  count: number
}

const Post: React.FC<PropsType> = (props) => {
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