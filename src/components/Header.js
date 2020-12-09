import React from 'react';
import s from './eader.module.css';

const Header = () => {
	return (
    <header className = {s.header}>
    	<div className={s.title}>
	    	<i class="fa fa-home"></i>
	    	<span className={s.logoText}>Посёлочек</span>
    	</div>

    </header>
		)
}

export default  Header;