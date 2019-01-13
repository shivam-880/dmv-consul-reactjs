import consul from '../apis/consul';
import { treeNodeIcon, treeServiceIcon, treeMpsIcon } from '../icons';
import { FETCH_SERVICE_VIEW } from './actionType';
import { SERVICE, NODE, MPS } from '../treeNodeType';

const createNode = (title, parent, children = []) => {
    return {
        'title': title,
        'className': treeNodeIcon,
        'type': NODE,
        'parent': parent,
        'children': children
    };
}

const createService = (title, parent = '', children = []) => {
    return {
        'title': title,
        'className': treeServiceIcon,
        'type': SERVICE,
        'parent': parent,
        'children': children
    };
}

const createMps = (title, parent, children = []) => {
    return {
        'title': title,
        'className': treeMpsIcon,
        'type': MPS,
        'parent': parent,
        'children': children
    };
}

const createServiceView = serviceApiResponse => {
    const serviceInTree = createService(serviceApiResponse[0].ServiceName, );

    serviceApiResponse.forEach(service => {
        const nodeInTree = createNode(service.Node, serviceInTree.title);

        Object.keys(service).forEach(key => {
            if (key === 'ServiceTags') {
                service[key].forEach(tag => {
                    const mpsInTree = createMps(tag, nodeInTree.title);
                    nodeInTree['children'].push(mpsInTree);
                });
            }
        });

        serviceInTree['children'].push(nodeInTree);
    });

    return serviceInTree;
}

const fetchServiceView = () => async dispatch => {
    const serviceViewTreeData = [];
    
    const servicesRes = await consul.get('/catalog/services');
    const services = Object.keys(servicesRes.data);

    for (const i in services) {
        const serviceRes = await consul.get(`/catalog/service/${services[i]}`);
        const service = serviceRes.data;

        serviceViewTreeData.push(createServiceView(service));
    }

    dispatch({
        type: FETCH_SERVICE_VIEW,
        payload: serviceViewTreeData
    });
};

export default fetchServiceView;
