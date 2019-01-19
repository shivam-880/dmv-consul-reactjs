import { UPDATE_SEARCH_STRING, FETCH_NODE_VIEW, FETCH_SERVICE_VIEW, FETCH_MPS_VIEW, UPDATE_SEARCH_FOUND_COUNT, UPDATE_SEARCH_FOCUS_INDEX } from "../../common/types/actionType";

const defaultSearch = {
    searchString: '',
    searchFocusIndex: 0,
    searchFoundCount: null
};

const searchReducer = (searchData = defaultSearch, { type, payload }) => {
    if (type === UPDATE_SEARCH_STRING)
        return { ...searchData, searchString: payload };

    if (type === UPDATE_SEARCH_FOUND_COUNT)
        return { ...searchData, searchFoundCount: payload };

    if (type === UPDATE_SEARCH_FOCUS_INDEX)
        return { ...searchData, searchFocusIndex: payload };

    if (
        type === FETCH_NODE_VIEW ||
        type === FETCH_SERVICE_VIEW ||
        type === FETCH_MPS_VIEW
    )
        return defaultSearch;

    return searchData;
}

export default searchReducer;
