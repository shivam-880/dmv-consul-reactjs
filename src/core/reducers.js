import { combineReducers } from 'redux';

import { treeReducer } from '../components/deployment-model/reducers';
import { viewReducer } from '../components/view-selector/reducers';
import { detailsReducer } from '../components/details/reducers';
import { searchReducer } from '../components/search-box/reducers';

export default combineReducers({
    treeData: treeReducer,
    view: viewReducer,
    details: detailsReducer,
    search: searchReducer
});
