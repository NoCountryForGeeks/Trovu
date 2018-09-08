import React from 'react';

import { root, footerText } from './footer.scss';

const Footer = () => (
	<footer className={root}>
		<p className={footerText}>
			© No Country for Geeks - Powered by{' '}
			<a href='https://github.com/NoCountryForGeeks/react-boilerplate'>
				React Boilerplate
			</a>
		</p>
	</footer>
);

export { Footer };
