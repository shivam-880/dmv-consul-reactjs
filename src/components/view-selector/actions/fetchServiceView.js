import consul from '../../../common/apis/consul';
import { FETCH_SERVICE_VIEW } from '../actionTypes';
import { Node, Service, Tag } from './tree';

const createNode = (title, parent) => Node(title, parent);

const createService = title => Service(title);

const createTag = (title, parent) => Tag(title, parent);

const createServiceView = serviceApiResponse => {
    const serviceInTree = createService(serviceApiResponse[0].ServiceName, );

    serviceApiResponse.forEach(service => {
        const nodeInTree = createNode(service.Node, serviceInTree.title);

        Object.keys(service).forEach(key => {
            if (key === 'ServiceTags') {
                service[key].forEach(tag => {
                    const tagInTree = createTag(tag, nodeInTree.title);
                    nodeInTree['children'].push(tagInTree);
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
