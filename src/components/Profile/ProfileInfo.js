import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
    <div>
      <div>
          <img src='https://vcube.pro/images/Construction_services/Sections/kottedzhnyy-poselok.png' />
      </div>
      <div className={s.descriptionBlock}>
          ava + description
      </div>
    </div>
		)
}
ProfileInfo
export default  ProfileInfo;