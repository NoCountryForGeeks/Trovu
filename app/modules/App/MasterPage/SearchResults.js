import React from 'react';
import classNames from 'classNames';

import { Card } from './SearchResults/Card';
import { Loading } from './SearchResults/Loading';

import styles from './searchResults.scss';

const cx = classNames.bind(styles);

const rootListStyles = cx({
	[ styles.root ]: true,
	[ styles.wrapCardList ]: true
});

const renderCardList = results => (
	<ul className={rootListStyles}>
		{results.map(({ id, name, imageUrl }) => (
			<Card key={id} name={name} imageUrl={imageUrl} />
		))}
	</ul>
);

const SearchResult = ({ results, isLoading }) =>
	isLoading ? (
		<div className={styles.wrapLoading}>
			<Loading />
		</div>
	) : (
		renderCardList(results)
	);

export { SearchResult };
