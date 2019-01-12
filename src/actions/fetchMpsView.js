import consul from '../apis/consul.js';
import { treeNodeIcon, treeServiceIcon, treeMpsIcon } from '../icons';
import { FETCH_MPS_VIEW } from './actionType';

const mpss = {};

const alreadyAddedAsChild = (arr, title) => arr.some(value => {
    return value.title === title;
});

const createServiceView = serviceApiResponse => {
    const serviceInTree = {};

    serviceInTree['title'] = serviceApiResponse[0].ServiceName;
    serviceInTree['className'] = treeServiceIcon;
    serviceInTree['children'] = [];

    serviceApiResponse.forEach(service => {
        const nodeInTree = {};

        nodeInTree['title'] = service.Node;
        nodeInTree['className'] = treeNodeIcon;

        serviceInTree['children'].push(nodeInTree);

        Object.keys(service).forEach(key => {
            if (key === 'ServiceTags') {
                service[key].forEach(tag => {
                    if (tag in mpss) {
                        if(!alreadyAddedAsChild(mpss[tag].children, serviceInTree.title))
                            mpss[tag].children.push(serviceInTree);
                    } else {
                        let mpsInTree = {};
                        mpsInTree['title'] = tag;
                        mpsInTree['className'] = treeMpsIcon;
                        mpsInTree['children'] = [serviceInTree];

                        mpss[tag] = mpsInTree;
                    }
                });
            }
        });
    });
}

const fetchMpsView = () => async dispatch => {
    const servicesRes = await consul.get('/catalog/services');
    const services = Object.keys(servicesRes.data);

    for (const i in services) {
        const serviceRes = await consul.get(`/catalog/service/${services[i]}`);
        const service = serviceRes.data;

        createServiceView(service);
    }

    const serviceViewTreeData = Object.values(mpss);

    dispatch({
        type: FETCH_MPS_VIEW,
        payload: serviceViewTreeData
    });
};

export default fetchMpsView;
