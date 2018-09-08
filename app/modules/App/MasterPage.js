import React from 'react';

import { SearchPanel } from './MasterPage/SearchPanel.js';
import { SearchResult } from './MasterPage/SearchResults.js';

import { root } from './masterPage.scss';

const MasterPage = () => (
	<main className={root}>
		<SearchPanel />
		<SearchResult />
	</main>
);

export { MasterPage };
