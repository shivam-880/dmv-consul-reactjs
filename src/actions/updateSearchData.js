import { UPDATE_SEARCH_DATA } from "../types/actionType";

export const updateSearchString = searchString => {
    return {
        type: UPDATE_SEARCH_DATA,
        payload: searchString
    }
}
