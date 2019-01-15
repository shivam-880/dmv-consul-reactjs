import { UPDATE_SEARCH_STRING, UPDATE_SEARCH_FOUND_COUNT, UPDATE_SEARCH_FOCUS_INDEX } from "../types/actionType";

export const updateSearchString = searchString => {
    return {
        type: UPDATE_SEARCH_STRING,
        payload: searchString
    }
}

export const updateSearchFoundCount = count => {
    return {
        type: UPDATE_SEARCH_FOUND_COUNT,
        payload: count
    }
}

export const udpateSearchFocusIndex = index => {
    return {
        type: UPDATE_SEARCH_FOCUS_INDEX,
        payload: index
    }
}
