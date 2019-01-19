import { combineReducers } from 'redux';

import treeDataReducer from './reducers-all/treeDataReducer';
import { viewReducer } from './selector/reducers';
import treeNodeInfoReducer from './reducers-all/treeNodeInfoReducer';
import searchDataReducer from './reducers-all/searchDataReducer';

export default combineReducers({
    treeData: treeDataReducer,
    treeView: viewReducer,
    treeNodeInfo: treeNodeInfoReducer,
    searchData: searchDataReducer
});
