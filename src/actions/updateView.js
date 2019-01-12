import { UPDATE_VIEW } from './actionType';

const updateView = (treeData) => {
    return {
        type: UPDATE_VIEW,
        payload: treeData
    };
};

export default updateView;