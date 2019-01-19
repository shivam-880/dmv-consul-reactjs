import consul from '../../apis/consul.js';
import { FETCH_SERVICE_DETAILS } from '../../types/actionType';
import { NODE_VIEW, SERVICE_VIEW, MPS_VIEW } from '../../types/treeViewType';

const fetchServiceDetails = (title, parent) => async (dispatch, getState) => {
    const serviceDetails = [];

    const serviceRes = await consul.get(`/health/service/${title}`);
    const port = serviceRes.data[0].Service.Port;

    const state = getState();
    if (state.treeView === NODE_VIEW) {
        serviceRes.data.forEach(i => {
            if (i.Node.Node === parent && i.Checks.length > 1) {
                serviceDetails.push({
                    'service': title,
                    'hostname': i.Node.Node,
                    'interface': i.Node.Address,
                    'port': port,
                    'status': i.Checks[1].Status
                })
            }
        });
    } else if (state.treeView === SERVICE_VIEW || state.treeView === MPS_VIEW) {
        serviceRes.data.forEach(i => {
            if (i.Checks.length > 1) {
                serviceDetails.push({
                    'service': title,
                    'hostname': i.Node.Node,
                    'interface': i.Node.Address,
                    'port': port,
                    'status': i.Checks[1].Status
                });
            }
        });
    }

    dispatch({
        type: FETCH_SERVICE_DETAILS,
        payload: serviceDetails
    });
};

export default fetchServiceDetails;
