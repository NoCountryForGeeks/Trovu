import { createReducer } from 'redux-act';

import {
	searchCardDone,
	searchCardRequest,
	searchCardError
} from '../actions/cards';

export default createReducer(
	{
		[ searchCardRequest ]: () => true,
		[ searchCardDone ]: () => false,
		[ searchCardError ]: () => false
	},
	false
);
