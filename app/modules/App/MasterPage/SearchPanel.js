import React, { Component } from 'react';

import { search } from 'services';

import { root, sectionTitle, button } from './searchPanel.scss';

class SearchPanel extends Component {
	onSearchButtonClick = () =>
		search(this.input.value).then(results =>
			this.props.searchCallback(results.data.cards)
		);

	render = () => (
		<div className={root}>
			<h2 className={sectionTitle}>Search</h2>
			<input type='text' ref={input => (this.input = input)} />
			<button onClick={() => this.onSearchButtonClick()} className={button}>
				Search
			</button>
		</div>
	);
}

export { SearchPanel };
