import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {
	if (props.users.length === 0) {
			props.setUsers(
			 [
				{id: 1, photoUrl: 'https://im0-tub-ru.yandex.net/i?id=55c8424f2979e43156dad14a18971b5e&n=13', flollowed: false, fullName: 'Yakov', status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}},
				{id: 2, photoUrl: 'https://im0-tub-ru.yandex.net/i?id=55c8424f2979e43156dad14a18971b5e&n=13', flollowed: true, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Minsk', country: 'Belarus'}},
				{id: 3, photoUrl: 'https://im0-tub-ru.yandex.net/i?id=55c8424f2979e43156dad14a18971b5e&n=13', flollowed: false, fullName: 'Andrew', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'}},
			]
		);
	}


	return <div>
		{
				props.users.map( u => <div key={u.id}>
					<span>
						<div>
							<img src={u.photoUrl} className={styles.userPhoto} />
						</div>
						<div>
							{ u.followed 
								? <button onClick = {() => { props.unfollow(u.id) } }>Unfollow</button> 
								: <button onClick = {() => { props.follow(u.id) } }>Follow</button>}
						</div>
					</span>
					<span>
						<span>
							<div>{u.fullName}</div>
							<div>{u.status}</div>
						</span>
						<span>
								<div>{u.location.country}</div>
								<div>{u.location.city}</div>
						</span>
					</span>
				</div>)
		}
	</div>
}

export default Users;