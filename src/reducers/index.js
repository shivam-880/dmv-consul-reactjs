import { combineReducers } from 'redux';

const treeDataReducer = (treeData = [], { type, payload }) => {
    if (
        type === 'FETCH_NODE_VIEW' ||
        type === 'FETCH_SERVICE_VIEW' ||
        type === 'FETCH_MPS_VIEW' ||
        type === 'UPDATE_VIEW'
    )
        return payload;

    return treeData;
}

export default combineReducers({ treeData: treeDataReducer });
