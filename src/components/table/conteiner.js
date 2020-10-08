import { compose } from 'redux';
import { connect } from 'react-redux';
import View  from './view';
import { getAllUserTableThunk } from '../../store/contacts'

const mapStateToProps = (state) => {
    return {
        usersData: state.contacts.usersDataTable,
        loader: state.contacts.loader
    }
};

const mapDispatchToProps = { getAllUserTableThunk }

const TableIn = compose(
    connect(mapStateToProps, mapDispatchToProps),
)(View);

export default TableIn;