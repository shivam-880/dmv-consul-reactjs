import { UPDATE_SEARCH_STRING } from "../../types/actionType";

const updateSearchString = searchString => {
    return {
        type: UPDATE_SEARCH_STRING,
        payload: searchString
    }
}

export default updateSearchString;
