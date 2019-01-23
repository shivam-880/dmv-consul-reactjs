import { connect } from 'react-redux';

import { updateKeyword, udpateFocusIndex } from './actions';
import { fetchNodeDetails, fetchServiceDetails, resetDetails } from '../details/actions';
import SearchBox from './SearchBox';

const mapStateToProps = ({ search }) => {
    const { keyword, focusIndex, foundCount } = search;
    return { keyword, focusIndex, foundCount }
};

const SearchBoxContainer = connect(
    mapStateToProps,
    {
        updateKeyword,
        udpateFocusIndex,
        resetDetails
    }
)(SearchBox);

export default SearchBoxContainer;
