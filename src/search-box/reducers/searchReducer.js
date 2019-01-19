import { UPDATE_SEARCH_STRING, FETCH_NODE_VIEW, FETCH_SERVICE_VIEW, FETCH_MPS_VIEW, UPDATE_FOUND_COUNT, UPDATE_FOCUS_INDEX } from "../../common/types/actionType";

const defaultSearch = {
    keyword: '',
    focusIndex: 0,
    foundCount: null
};

const searchReducer = (search = defaultSearch, { type, payload }) => {
    if (type === UPDATE_SEARCH_STRING)
        return { ...search, keyword: payload };

    if (type === UPDATE_FOUND_COUNT)
        return { ...search, foundCount: payload };

    if (type === UPDATE_FOCUS_INDEX)
        return { ...search, focusIndex: payload };

    if (
        type === FETCH_NODE_VIEW ||
        type === FETCH_SERVICE_VIEW ||
        type === FETCH_MPS_VIEW
    )
        return defaultSearch;

    return search;
}

export default searchReducer;
