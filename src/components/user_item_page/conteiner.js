import { compose } from 'redux';
import { connect } from 'react-redux';
import View from './view';


const mapStateToProps = (state) => {
	return {
		usersData: state.contacts.usersData
	}
};

const mapDispatchToProps = {};




export default compose(
	connect(mapStateToProps, mapDispatchToProps),
)(View);



