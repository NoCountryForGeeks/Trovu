import React from 'react';

import { SearchPanel } from './MasterPage/SearchPanel.js';
import { SearchResult } from './MasterPage/SearchResults.js';

import { root } from './masterPage.scss';

const MasterPage = ({ search, results, isLoading }) => (
	<main className={root}>
		<SearchPanel search={search} />
		<SearchResult results={results} isLoading={isLoading} />
	</main>
);

export { MasterPage };
