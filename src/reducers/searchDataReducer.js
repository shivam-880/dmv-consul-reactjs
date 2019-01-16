import { UPDATE_SEARCH_STRING, UPDATE_SEARCH_MATCHES, FETCH_NODE_VIEW, FETCH_SERVICE_VIEW, FETCH_MPS_VIEW, UPDATE_SEARCH_FOUND_COUNT, UPDATE_SEARCH_FOCUS_INDEX } from "../types/actionType";

const searchDataReducer = (
    searchData = {
        searchString: '',
        searchFocusIndex: 0,
        searchFoundCount: null,
        searchMatches: []
    },
    { type, payload }
) => {
    if (type === UPDATE_SEARCH_STRING)
        return { ...searchData, searchString: payload };

    if (type === UPDATE_SEARCH_FOUND_COUNT)
        return { ...searchData, searchFoundCount: payload };

    if (type === UPDATE_SEARCH_FOCUS_INDEX)
        return { ...searchData, searchFocusIndex: payload };

    if (type === UPDATE_SEARCH_MATCHES)
        return { ...searchData, searchMatches: payload };

    if (
        type === FETCH_NODE_VIEW ||
        type === FETCH_SERVICE_VIEW ||
        type === FETCH_MPS_VIEW
    )
        return {
            searchString: '',
            searchFocusIndex: 0,
            searchFoundCount: null
        };

    return searchData;
}

export default searchDataReducer;
