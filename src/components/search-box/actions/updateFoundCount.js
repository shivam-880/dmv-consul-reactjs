import { UPDATE_FOUND_COUNT } from "../actionTypes";

const updateFoundCount = count => {
    return {
        type: UPDATE_FOUND_COUNT,
        payload: count
    }
}

export default updateFoundCount;
