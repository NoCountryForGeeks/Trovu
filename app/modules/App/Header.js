import React from 'react';

import { root, headerTitle, logo } from './header.scss';
import trovuLogo from 'assets/images/logo.png';

const Header = () => (
	<header className={root}>
		<img className={logo} src={trovuLogo} />
		<h1 className={headerTitle}>Trovu</h1>
	</header>
);

export { Header };
