import { FETCH_NODE_VIEW, FETCH_SERVICE_VIEW, FETCH_MPS_VIEW, UPDATE_TREE } from '../types/actionType';

const treeDataReducer = (treeData = [], { type, payload }) => {
    if (
        type === FETCH_NODE_VIEW ||
        type === FETCH_SERVICE_VIEW ||
        type === FETCH_MPS_VIEW ||
        type === UPDATE_TREE
    )
        return payload;

    return treeData;
}

export default treeDataReducer;
