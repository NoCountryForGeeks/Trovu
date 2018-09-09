import React, { Component } from 'react';

import { SearchPanel } from './MasterPage/SearchPanel.js';
import { SearchResult } from './MasterPage/SearchResults.js';

import { root } from './masterPage.scss';

class MasterPage extends Component {
	state = { results: [] };

	onSearchFinished = results => this.setState({ results });

	render = () => (
		<main className={root}>
			<SearchPanel searchCallback={results => this.onSearchFinished(results)} />
			<SearchResult results={this.state.results} />
		</main>
	);
}

export { MasterPage };
