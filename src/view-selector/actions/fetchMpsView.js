import consul from '../../common/apis/consul';
import { treeNodeIcon, treeServiceIcon, treeMpsIcon } from '../../common/icons';
import { FETCH_MPS_VIEW } from '../actionTypes';
import { SERVICE, NODE, MPS } from '../../common/types/treeNodeType';

const alreadyAddedAsChild = (arr, title) => {
    for (const i in arr) {
        if (arr[i].title === title) {
            return {
                res: true,
                child: arr[i]
            }
        }
    }

    return {
        res: false,
        child: null
    }
}

const createNode = (title, parent) => {
    return {
        'title': title,
        'className': treeNodeIcon,
        'type': NODE,
        'parent': parent
    };
}

const createService = (title, node, parent) => {
    return {
        'title': title,
        'className': treeServiceIcon,
        'type': SERVICE,
        'children': [node],
        'parent': parent
    };
}

const createMps = (title, service, parent = '') => {
    return {
        'title': title,
        'className': treeMpsIcon,
        'type': MPS,
        'children': [service],
        'parent': parent
    };
}

const createServiceView = (serviceApiResponse, mpss) => {
    const serviceTitle = serviceApiResponse[0].ServiceName;

    serviceApiResponse.forEach(service => {
        Object.keys(service).forEach(key => {
            const nodeInTree = createNode(service.Node, serviceTitle);

            if (key === 'ServiceTags') {
                service[key].forEach(tag => {
                    if (tag in mpss) {

                        const { res, child } = alreadyAddedAsChild(mpss[tag].children, serviceTitle);
                        if (res) {
                            child.children.push(nodeInTree);
                        } else {
                            const serviceInTree = createService(serviceTitle, nodeInTree, tag);
                            mpss[tag].children.push(serviceInTree);
                        }
                    } else {
                        const serviceInTree = createService(serviceTitle, nodeInTree, tag);
                        const mpsInTree = createMps(tag, serviceInTree);
                        mpss[tag] = mpsInTree;
                    }
                });
            }
        });
    });
}

const fetchMpsView = () => async dispatch => {
    const mpss = {};

    const servicesRes = await consul.get('/catalog/services');
    const services = Object.keys(servicesRes.data);

    for (const i in services) {
        const serviceRes = await consul.get(`/catalog/service/${services[i]}`);
        const service = serviceRes.data;

        createServiceView(service, mpss);
    }

    const serviceViewTreeData = Object.values(mpss);

    dispatch({
        type: FETCH_MPS_VIEW,
        payload: serviceViewTreeData
    });
};

export default fetchMpsView;
