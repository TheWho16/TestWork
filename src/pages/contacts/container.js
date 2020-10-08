import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from './view';
import { getAllUserThunk } from '../../store/contacts'

const mapStateToProps = (state) => {
	return {
		usersData: state.contacts.usersData,
		loader: state.contacts.loader

	}
};

const mapDispatchToProps = { getAllUserThunk }

const Contacts = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(View);

export default Contacts ;
