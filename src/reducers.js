import { combineReducers } from 'redux';

import treeDataReducer from './reducers-all/treeDataReducer';
import { viewReducer } from './selector/reducers';
import { detailsReducer } from './details/reducers';
import searchDataReducer from './reducers-all/searchDataReducer';

export default combineReducers({
    treeData: treeDataReducer,
    treeView: viewReducer,
    treeNodeInfo: detailsReducer,
    searchData: searchDataReducer
});
