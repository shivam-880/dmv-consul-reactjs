import { UPDATE_SEARCH_DATA, FETCH_NODE_VIEW, FETCH_SERVICE_VIEW, FETCH_MPS_VIEW } from "../types/actionType";

const searchDataReducer = (searchData = {}, { type, payload }) => {
    if (type === UPDATE_SEARCH_DATA)
        return { ...searchData, searchString: payload };
        
    if (
        type === FETCH_NODE_VIEW ||
        type === FETCH_SERVICE_VIEW ||
        type === FETCH_MPS_VIEW
    )
        return { ...searchData, searchString: '' };

    return searchData;
}

export default searchDataReducer;
