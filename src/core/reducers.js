import { combineReducers } from 'redux';

import { treeReducer } from '../deployment-model/reducers';
import { viewReducer } from '../view-selector/reducers';
import { detailsReducer } from '../details/reducers';
import { searchReducer } from '../search-box/reducers';

export default combineReducers({
    treeData: treeReducer,
    treeView: viewReducer,
    treeNodeInfo: detailsReducer,
    searchData: searchReducer
});
