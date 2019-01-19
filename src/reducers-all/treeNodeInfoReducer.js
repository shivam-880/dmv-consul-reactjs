import { FETCH_SERVICE_INFO, FETCH_NODE_INFO } from '../types/actionType';
import { FETCH_NODE_VIEW, FETCH_SERVICE_VIEW, FETCH_MPS_VIEW, RESET_TREE_NODE_INFO_VIEW } from '../types/actionType';

const treeNodeInfoReducer = (treeNodeInfo = [], { type, payload }) => {
    if (type === FETCH_SERVICE_INFO || type === FETCH_NODE_INFO )
        return payload;
        
    if (
        type === FETCH_NODE_VIEW ||
        type === FETCH_SERVICE_VIEW ||
        type === FETCH_MPS_VIEW ||
        type === RESET_TREE_NODE_INFO_VIEW
    )
        return [];
    
    return treeNodeInfo;
}

export default treeNodeInfoReducer;
