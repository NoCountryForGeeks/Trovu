import React, { Component } from 'react';

import { search } from 'services';

import { root } from './searchPanel.scss';

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
			<input type='text' ref={input => (this.input = input)} />
			<button onClick={() => this.onSearchButtonClick()} />
			{this.renderCardList()}
		</div>
	);
}

export { SearchPanel };
