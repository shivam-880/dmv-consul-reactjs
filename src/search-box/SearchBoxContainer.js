import { connect } from 'react-redux';

import { updateSearchString, udpateSearchFocusIndex } from './actions';
import { fetchNodeDetails, fetchServiceDetails, resetDetails } from '../details/actions';
import SearchBox from './SearchBox';

const mapStateToProps = ({ searchData }) => {
    return {
        searchString: searchData.searchString,
        searchFocusIndex: searchData.searchFocusIndex,
        searchFoundCount: searchData.searchFoundCount
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
