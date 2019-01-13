import consul from '../apis/consul';
import { treeNodeIcon, treeServiceIcon, treeMpsIcon } from '../icons';
import { FETCH_MPS_VIEW } from './actionType';
import { SERVICE, NODE, MPS } from '../treeNodeType';

const mpss = {};

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

const createNode = title => {
    return {
        'title': title,
        'className': treeNodeIcon,
        'type': NODE
    };
}

const createService = (title, node) => {
    return {
        'title': title,
        'className': treeServiceIcon,
        'type': SERVICE,
        'children': [node]
    };
}

const createMps = (title, service) => {
    return {
        'title': title,
        'className': treeMpsIcon,
        'type': MPS,
        'children': [service]
    };
}

const createServiceView = serviceApiResponse => {
    const serviceTitle = serviceApiResponse[0].ServiceName;

    serviceApiResponse.forEach(service => {
        Object.keys(service).forEach(key => {
            const nodeInTree = createNode(service.Node);

            if (key === 'ServiceTags') {
                service[key].forEach(tag => {
                    if (tag in mpss) {

                        const { res, child } = alreadyAddedAsChild(mpss[tag].children, serviceTitle);
                        if (res) {
                            child.children.push(nodeInTree);
                        } else {
                            const serviceInTree = createService(serviceTitle, nodeInTree);
                            mpss[tag].children.push(serviceInTree);
                        }
                    } else {
                        const serviceInTree = createService(serviceTitle, nodeInTree);
                        const mpsInTree = createMps(tag, serviceInTree);
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
