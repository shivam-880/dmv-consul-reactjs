import consul from '../../common/apis/consul.js';
import { FETCH_NODE_DETAILS } from '../actionTypes';

const fetchNodeDetails = title => async dispatch => {
    const nodeDetails = [];

    const nodeRes = await consul.get(`/catalog/node/${title}`);
    const address = nodeRes.data.Node.Address;

    const nodeHealthRes = await consul.get(`/health/node/${title}`);
    const status = nodeHealthRes.data[0].Status;

    nodeDetails.push({
        'hostname': title,
        'interface': address,
        'status': status
    });

    dispatch({
        type: FETCH_NODE_DETAILS,
        payload: nodeDetails
    });
};

export default fetchNodeDetails;
