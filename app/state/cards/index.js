import cards from './reducers/cards';
import cardsSaga from './sagas/cards';

export default { sagas: [ cardsSaga ], reducers: { cards } };
