import consul from '../apis/consul.js';
import { FETCH_SERVICE_INFO } from './actionType';

const fetchNodeInfo = title => async dispatch => {
    const serviceRes = await consul.get(`/health/service/${title}`);
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

export default fetchNodeInfo;
