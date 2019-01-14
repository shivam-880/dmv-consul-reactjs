import { FETCH_SERVICE_INFO } from '../types/actionType';

const serviceInfoReducer = (serviceInfo = [], { type, payload }) => {
    if (type === FETCH_SERVICE_INFO) {
        console.log(payload);
        return payload;
    }
    
    return serviceInfo;
}

export default serviceInfoReducer;
