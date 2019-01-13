import { combineReducers } from 'redux';

import treeDataReducer from './treeDataReducer';
import nodeInfoReducer from './nodeInfoReducer';
import serviceInfoReducer from './serviceInfoReducer';

export default combineReducers({
    treeData: treeDataReducer,
    nodeInfo: nodeInfoReducer,
    serviceInfo: serviceInfoReducer
});
