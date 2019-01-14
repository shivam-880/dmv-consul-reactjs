import consul from '../apis/consul.js';
import { FETCH_SERVICE_INFO } from '../types/actionType';
import { NODE_VIEW, SERVICE_VIEW, MPS_VIEW } from '../types/treeViewType';

const fetchServiceInfo = title => async dispatch => {
    const serviceRes = await consul.get(`/health/service/${title}`);
    console.log(serviceRes);
    const port = serviceRes.data.Node.Address;
    const status = serviceRes.data.Status;

    dispatch({
        type: FETCH_SERVICE_INFO,
        payload: {
            'service': title,
            'port': port,
            'status': status
        }
    });
};

export default fetchServiceInfo;
