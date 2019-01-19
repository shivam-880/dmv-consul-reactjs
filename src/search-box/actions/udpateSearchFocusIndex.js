import { UPDATE_SEARCH_FOCUS_INDEX } from "../../common/types/actionType";

const udpateSearchFocusIndex = index => {
    return {
        type: UPDATE_SEARCH_FOCUS_INDEX,
        payload: index
    }
}

export default udpateSearchFocusIndex;
