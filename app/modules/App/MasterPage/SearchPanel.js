import React, { Component } from 'react';

import { root, sectionTitle, button } from './searchPanel.scss';

class SearchPanel extends Component {
	onSearchButtonClick = () => this.props.search(this.input.value);

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
