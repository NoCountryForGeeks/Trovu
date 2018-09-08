import React from 'react';

import { Header } from './App/Header';
import { Footer } from './App/Footer';
import { MasterPage } from './App/MasterPage';

import { root } from './app.scss';

const App = () => (
	<div className={root}>
		<Header />
		<MasterPage />
		<Footer />
	</div>
);

export { App };
