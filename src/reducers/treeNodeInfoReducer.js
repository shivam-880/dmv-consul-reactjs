import { FETCH_SERVICE_INFO, FETCH_NODE_INFO } from '../types/actionType';

const treeNodeInfoReducer = (treeNodeInfo = [], { type, payload }) => {
    if (type === FETCH_SERVICE_INFO || type === FETCH_NODE_INFO )
        return payload;
    
    return treeNodeInfo;
}

export default treeNodeInfoReducer;
