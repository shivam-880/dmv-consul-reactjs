import { UPDATE_KEYWORD } from "../actionTypes";

const updateKeyword = keyword => {
    return {
        type: UPDATE_KEYWORD,
        payload: keyword
    }
}

export default updateKeyword;
