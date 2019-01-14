import { combineReducers } from 'redux';

import treeDataReducer from './treeDataReducer';
import treeViewReducer from './treeViewReducer';
import treeNodeInfoReducer from './treeNodeInfoReducer';

export default combineReducers({
    treeData: treeDataReducer,
    treeView: treeViewReducer,
    treeNodeInfo: treeNodeInfoReducer
});
