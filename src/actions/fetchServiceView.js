import consul from '../apis/consul';
import { treeNodeIcon, treeServiceIcon, treeMpsIcon } from '../icons';
import { FETCH_SERVICE_VIEW } from './actionType';
import { SERVICE, NODE, MPS } from '../treeNodeType';

const createServiceView = serviceApiResponse => {
    const serviceInTree = {};

    serviceInTree['title'] = serviceApiResponse[0].ServiceName;
    serviceInTree['className'] = treeServiceIcon;
    serviceInTree['type'] = SERVICE;
    serviceInTree['parent'] = '';
    serviceInTree['children'] = [];

    serviceApiResponse.forEach(service => {
        const nodeInTree = {};

        nodeInTree['title'] = service.Node;
        nodeInTree['className'] = treeNodeIcon;
        nodeInTree['type'] = NODE;
        nodeInTree['parent'] = serviceInTree.title;
        nodeInTree['children'] = [];

        Object.keys(service).forEach(key => {
            if (key === 'ServiceTags') {
                service[key].forEach(tag => {
                    const mpsInTree = {};
                    mpsInTree['title'] = tag;
                    mpsInTree['className'] = treeMpsIcon;
                    mpsInTree['type'] = MPS;
                    mpsInTree['parent'] = nodeInTree.title;

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
