import { createReducer } from 'redux-act';

import { searchCardDone } from '../actions/cards';

export default createReducer(
	{
		[ searchCardDone ]: (_, payload) => payload
	},
	[]
);
