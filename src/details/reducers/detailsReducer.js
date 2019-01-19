import { FETCH_SERVICE_DETAILS, RESET_DETAILS, FETCH_NODE_DETAILS } from '../actionTypes';
import { FETCH_NODE_VIEW, FETCH_SERVICE_VIEW, FETCH_MPS_VIEW } from '../../view-selector/actionTypes';

const detailsReducer = (details = [], { type, payload }) => {
    if (type === FETCH_SERVICE_DETAILS || type === FETCH_NODE_DETAILS )
        return payload;
        
    if (
        type === FETCH_NODE_VIEW ||
        type === FETCH_SERVICE_VIEW ||
        type === FETCH_MPS_VIEW ||
        type === RESET_DETAILS
    )
        return [];
    
    return details;
}

export default detailsReducer;
