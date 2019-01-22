import consul from '../../../common/apis/consul';
import { FETCH_TAG_VIEW } from '../actionTypes';
import { Node, Service, Tag } from './tree';

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

const createNode = (title, parent) => Node(title, parent);

const createService = (title, parent, node) => Service(title, parent, [node]);

const createTag = (title, service) => Tag(title, [service]);

const createServiceView = (serviceApiResponse, tags) => {
    const serviceTitle = serviceApiResponse[0].ServiceName;

    serviceApiResponse.forEach(service => {
        Object.keys(service).forEach(key => {
            const nodeInTree = createNode(service.Node, serviceTitle);

            if (key === 'ServiceTags') {
                service[key].forEach(tag => {
                    if (tag in tags) {

                        const { res, child } = alreadyAddedAsChild(tags[tag].children, serviceTitle);
                        if (res) {
                            child.children.push(nodeInTree);
                        } else {
                            const serviceInTree = createService(serviceTitle, tag, nodeInTree);
                            tags[tag].children.push(serviceInTree);
                        }
                    } else {
                        const serviceInTree = createService(serviceTitle, tag, nodeInTree);
                        const tagInTree = createTag(tag, serviceInTree);
                        tags[tag] = tagInTree;
                    }
                });
            }
        });
    });
}

const fetchTagView = () => async dispatch => {
    const tags = {};

    const servicesRes = await consul.get('/catalog/services');
    const services = Object.keys(servicesRes.data);

    for (const i in services) {
        const serviceRes = await consul.get(`/catalog/service/${services[i]}`);
        const service = serviceRes.data;

        createServiceView(service, tags);
    }

    const tagViewTreeData = Object.values(tags);

    dispatch({
        type: FETCH_TAG_VIEW,
        payload: tagViewTreeData
    });
};

export default fetchTagView;
