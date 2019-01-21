import { UPDATE_TREE } from '../actionType';

const updateTree = treeData => {
    return {
        type: UPDATE_TREE,
        payload: treeData
    };
};

export default updateTree;
