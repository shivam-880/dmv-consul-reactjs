import consul from '../apis/consul.js';
import { FETCH_NODE_INFO } from './actionType';

const fetchNodeInfo = (title) => async dispatch => {
    const nodeRes = await consul.get(`/catalog/node/${title}`);
    const address = nodeRes.data.Node.Address;

    const nodeHealthRes = await consul.get(`/health/node/${title}`);
    const status = nodeHealthRes.data[0].Status;

    dispatch({
        type: FETCH_NODE_INFO,
        payload: {
            'title': title,
            'interface': address,
            'status': status
        }
    });
};

export default fetchNodeInfo;
