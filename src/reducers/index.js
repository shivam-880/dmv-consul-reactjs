import { combineReducers } from 'redux';

import treeDataReducer from './treeDataReducer';
import treeViewReducer from './treeViewReducer';
import treeNodeInfoReducer from './treeNodeInfoReducer';
import searchDataReducer from './searchDataReducer';

export default combineReducers({
    treeData: treeDataReducer,
    treeView: treeViewReducer,
    treeNodeInfo: treeNodeInfoReducer,
    searchData: searchDataReducer
});
