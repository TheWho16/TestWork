import { compose } from 'redux';
import { connect } from 'react-redux';
import View  from './view';
import { getAllUserTableThunk } from '../../store/contacts'

const mapStateToProps = (state) => {
    return {
        loader: state.contacts.loader,
        statistik: state.contacts.statistik,

    }
};

const mapDispatchToProps = {  }

const SerchPanel = compose(
    connect(mapStateToProps, mapDispatchToProps),
)(View);

export default SerchPanel;