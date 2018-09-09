import cards from './cards';

export default {
	sagas: [ ...cards.sagas ],
	reducers: { ...cards.reducers }
};
