import { call, put, takeLatest } from 'redux-saga/effects';

import { search } from 'services/mtgService';
import {
	searchCardRequest,
	searchCardDone,
	searchCardError
} from 'state/cards/actions/cards';

function* searchCards({ payload: { query } }) {
	try {
		const results = yield call(search, query);
		yield put(searchCardDone(results.data.cards));
	} catch (e) {
		yield put(searchCardError(e));
	}
}

export default function* searchRequest() {
	yield takeLatest(searchCardRequest, searchCards);
}
