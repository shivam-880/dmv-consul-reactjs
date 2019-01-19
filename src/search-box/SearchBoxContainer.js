import { connect } from 'react-redux';

import { updateSearchString, udpateSearchFocusIndex } from './actions';
import { fetchNodeDetails, fetchServiceDetails, resetDetails } from '../details/actions';
import SearchBox from './SearchBox';

const mapStateToProps = ({ search }) => {
    return {
        searchString: search.searchString,
        searchFocusIndex: search.searchFocusIndex,
        searchFoundCount: search.searchFoundCount
    }
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
