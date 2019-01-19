import { UPDATE_KEYWORD } from "../../common/types/actionType";

const updateKeyword = keyword => {
    return {
        type: UPDATE_KEYWORD,
        payload: keyword
    }
}

export default updateKeyword;
