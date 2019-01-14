import { combineReducers } from 'redux';

import treeDataReducer from './treeDataReducer';
import treeViewReducer from './treeViewReducer';
import nodeInfoReducer from './nodeInfoReducer';
import serviceInfoReducer from './serviceInfoReducer';

export default combineReducers({
    treeData: treeDataReducer,
    treeView: treeViewReducer,
    nodeInfo: nodeInfoReducer,
    serviceInfo: serviceInfoReducer
});
