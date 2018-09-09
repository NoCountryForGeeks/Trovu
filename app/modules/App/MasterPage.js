import React, { Component } from 'react';

import { SearchPanel } from './MasterPage/SearchPanel.js';
import { SearchResult } from './MasterPage/SearchResults.js';

import { root } from './masterPage.scss';

class MasterPage extends Component {
	state = { isLoading: false };

	render = () => {
		const { search, results } = this.props;
		return (
			<main className={root}>
				<SearchPanel search={search} />
				<SearchResult results={results} isLoading={this.state.isLoading} />
			</main>
		);
	};
}

export { MasterPage };
