import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
	return (
    <div>
    <div className={s.img}>
      <img src='https://vcube.pro/images/Construction_services/Sections/kottedzhnyy-poselok.png' />
    </div>

    <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large}/>
      <div>{props.profile.aboutMe}</div>
      <div>{props.profile.fullName}</div>

    </div>

    </div>
		)
}

export default  ProfileInfo;