import consul from '../../apis/consul';
import { treeNodeIcon, treeServiceIcon, treeMpsIcon } from '../../icons';
import { FETCH_NODE_VIEW } from '../../types/actionType';
import { NODE, SERVICE, MPS } from '../../types/treeNodeType';

const createNode = (title, parent = '', children = []) => {
    return {
        'title': title,
        'className': treeNodeIcon,
        'type': NODE,
        'parent': parent,
        'children': children
    };
}

const createService = (title, parent, children = []) => {
    return {
        'title': title,
        'className': treeServiceIcon,
        'type': SERVICE,
        'children': children,
        'parent': parent
    };
}

const createMps = (title, parent) => {
    return {
        'title': title,
        'className': treeMpsIcon,
        'type': MPS,
        'parent': parent
    };
}

const createNodeView = nodeApiResponse => {
    const nodeName = nodeApiResponse.Node.Node;
    const services = Object.values(nodeApiResponse.Services);

    const nodeInTree = createNode(nodeName);

    services.forEach(service => {
        const serviceInTree = createService(service.Service, nodeInTree.title);

        Object.keys(service).forEach(key => {
            if (key === 'Tags') {
                service[key].forEach(tag => {
                    const mpsInTree = createMps(tag, serviceInTree.title);

                    serviceInTree['children'].push(mpsInTree);
                });
            }
        });

        nodeInTree['children'].push(serviceInTree);
    });

    return nodeInTree;
}

const fetchNodeView = () => async dispatch => {
    const nodeViewTreeData = [];
    
    const nodesRes = await consul.get('/catalog/nodes');
    const nodes = nodesRes.data;

    for (const i in nodes) {
        const nodeRes = await consul.get(`/catalog/node/${nodes[i].Node}`);
        const node = nodeRes.data;
        
        nodeViewTreeData.push(createNodeView(node));
    }

    dispatch({
        type: FETCH_NODE_VIEW,
        payload: nodeViewTreeData
    }); 
};

export default fetchNodeView;
