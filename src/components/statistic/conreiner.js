import { compose } from 'redux';
import { connect } from 'react-redux';
import View from './view';
import { getStatistikThunk } from '../../store/contacts'

const mapStateToProps = (state) => {
    return {
        statistik: state.contacts.statistik,
        loader: state.contacts.loader
    }
};

const mapDispatchToProps =  getStatistikThunk()

const Statistic = compose(
    connect(mapStateToProps, mapDispatchToProps),
)(View);

export default Statistic;