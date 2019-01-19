import { UPDATE_FOUND_COUNT } from "../../common/types/actionType";

const updateFoundCount = count => {
    return {
        type: UPDATE_FOUND_COUNT,
        payload: count
    }
}

export default updateFoundCount;
