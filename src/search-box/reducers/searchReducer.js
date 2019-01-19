import { FETCH_NODE_VIEW, FETCH_SERVICE_VIEW, FETCH_MPS_VIEW, UPDATE_KEYWORD, UPDATE_FOUND_COUNT, UPDATE_FOCUS_INDEX } from "../../common/types/actionType";

const defaultSearchValue = {
    keyword: '',
    focusIndex: 0,
    foundCount: null
};

const searchReducer = (search = defaultSearchValue, { type, payload }) => {
    if (type === UPDATE_KEYWORD)
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
        return defaultSearchValue;

    return search;
}

export default searchReducer;
