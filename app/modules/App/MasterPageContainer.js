import { connect } from 'react-redux';

import { searchCardRequest } from 'state/cards/actions/cards';
import { MasterPage } from './MasterPage';

const mapStateToProps = state => ({ results: state.cards });
const mapDispatchToProps = dispatch => ({
	search: query => dispatch(searchCardRequest({ query }))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MasterPage);
