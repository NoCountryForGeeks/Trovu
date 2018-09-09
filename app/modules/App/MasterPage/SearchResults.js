import React from 'react';

import { Card } from './SearchResults/Card';

import { root } from './searchResults.scss';

const renderCardList = results => (
	<ul className={root}>
		{results.map(({ id, name, imageUrl }) => (
			<Card key={id} name={name} imageUrl={imageUrl} />
		))}
	</ul>
);

const SearchResult = ({ results }) => renderCardList(results);

export { SearchResult };
