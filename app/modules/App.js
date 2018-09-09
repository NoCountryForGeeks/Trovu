import React from 'react';

import { Header } from './App/Header';
import { Footer } from './App/Footer';
import MasterPageContainer from './App/MasterPageContainer';

import { root } from './app.scss';

const App = () => (
	<div className={root}>
		<Header />
		<MasterPageContainer />
		<Footer />
	</div>
);

export { App };
