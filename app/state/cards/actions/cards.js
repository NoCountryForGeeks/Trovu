import { createAction } from 'redux-act';

const SEARCH_CARDS_REQUEST = 'SEARCH_CARDS_REQUEST';
const SEARCH_CARDS_DONE = 'SEARCH_CARDS_DONE';
const SEARCH_CARDS_ERROR = 'SEARCH_CARDS_ERROR';

const searchCardRequest = createAction(SEARCH_CARDS_REQUEST);
const searchCardDone = createAction(SEARCH_CARDS_DONE);
const searchCardError = createAction(SEARCH_CARDS_ERROR);

export { searchCardRequest, searchCardDone, searchCardError };
