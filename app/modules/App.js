import React, { Component, Fragment } from 'react';

import { Header } from './App/Header';
import { Footer } from './App/Footer';
import { MasterPage } from './App/MasterPage';

export class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<MasterPage />
				<Footer />
			</Fragment>
		);
	}
}
