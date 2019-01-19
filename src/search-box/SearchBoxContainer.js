import { connect } from 'react-redux';

import { updateSearchString, udpateSearchFocusIndex } from './actions';
import { fetchNodeDetails, fetchServiceDetails, resetDetails } from '../details/actions';
import SearchBox from './SearchBox';

const mapStateToProps = ({ search }) => {
    const { keyword, focusIndex, foundCount } = search;
    return { keyword, focusIndex, foundCount }
};

const SearchBoxContainer = connect(
    mapStateToProps,
    {
        updateSearchString,
        udpateSearchFocusIndex,
        fetchNodeDetails,
        fetchServiceDetails,
        resetDetails
    }
)(SearchBox);

export default SearchBoxContainer;
