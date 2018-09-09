import cards from './reducers/cards';
import isLoading from './reducers/loading';
import cardsSaga from './sagas/cards';

export default { sagas: [ cardsSaga ], reducers: { cards, isLoading } };
