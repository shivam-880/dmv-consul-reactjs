import { combineReducers } from 'redux';
import { FETCH_NODE_VIEW, FETCH_SERVICE_VIEW, FETCH_MPS_VIEW, UPDATE_VIEW, FETCH_NODE_INFO } from '../actions/actionType';

const treeDataReducer = (treeData = [], { type, payload }) => {
    if (
        type === FETCH_NODE_VIEW ||
        type === FETCH_SERVICE_VIEW ||
        type === FETCH_MPS_VIEW ||
        type === UPDATE_VIEW
    )
        return payload;

    return treeData;
}

const nodeInfoReducer = (nodeInfo = {}, { type, payload }) => {
    if (type === FETCH_NODE_INFO)
        return payload;
    
    return nodeInfo;
}

export default combineReducers({
    treeData: treeDataReducer,
    nodeInfo: nodeInfoReducer
});
