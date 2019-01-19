import { UPDATE_SEARCH_FOUND_COUNT } from "../../types/actionType";

const updateSearchFoundCount = count => {
    return {
        type: UPDATE_SEARCH_FOUND_COUNT,
        payload: count
    }
}

export default updateSearchFoundCount;
