import { FETCH_SERVICE_INFO } from '../actions/actionType';

const serviceInfoReducer = (serviceInfo = {}, { type, payload }) => {
    if (type === FETCH_SERVICE_INFO)
        return payload;
    
    return serviceInfo;
}

export default serviceInfoReducer;
