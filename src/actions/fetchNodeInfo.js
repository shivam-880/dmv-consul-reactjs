import consul from '../apis/consul.js';
import { FETCH_NODE_INFO } from '../types/actionType';

const fetchNodeInfo = title => async dispatch => {
    const nodeInfos = [];

    const nodeRes = await consul.get(`/catalog/node/${title}`);
    const address = nodeRes.data.Node.Address;

    const nodeHealthRes = await consul.get(`/health/node/${title}`);
    const status = nodeHealthRes.data[0].Status;

    nodeInfos.push({
        'hostname': title,
        'interface': address,
        'status': status
    });

    dispatch({
        type: FETCH_NODE_INFO,
        payload: nodeInfos
    });
};

export default fetchNodeInfo;
