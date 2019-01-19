import { UPDATE_FOCUS_INDEX } from "../actionTypes";

const udpateFocusIndex = index => {
    return {
        type: UPDATE_FOCUS_INDEX,
        payload: index
    }
}

export default udpateFocusIndex;
