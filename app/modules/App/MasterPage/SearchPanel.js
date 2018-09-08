import React, { Component } from 'react';

import { search } from 'services';

import { root, sectionTitle, button } from './searchPanel.scss';

class SearchPanel extends Component {
	state = { results: [] };

	onSearchButtonClick = () =>
		search(this.input.value).then(results =>
			this.setState({ results: results.data.cards })
		);

	renderCardList = () => (
		<ul>{this.state.results.map(card => <p key={card.id}>{card.name}</p>)}</ul>
	);

	render = () => (
		<div className={root}>
			<h2 className={sectionTitle}>Search</h2>
			<input type='text' ref={input => (this.input = input)} />
			<button onClick={() => this.onSearchButtonClick()} className={button}>
				Search
			</button>
			{this.renderCardList()}
		</div>
	);
}

export { SearchPanel };
