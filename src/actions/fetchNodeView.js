import consul from '../apis/consul.js'
import { treeNodeIcon, treeServiceIcon, treeMpsIcon } from '../icons'

const nodeViewTreeData = [];

const createNodeView = nodeApiResponse => {
    const nodeName = nodeApiResponse.Node.Node;
    const services = Object.values(nodeApiResponse.Services);

    const nodeInTree = {};

    nodeInTree['title'] = nodeName;
    nodeInTree['className'] = treeNodeIcon;
    nodeInTree['children'] = [];

    services.forEach(service => {
        const serviceInTree = {};

        serviceInTree['title'] = service.Service;
        serviceInTree['className'] = treeServiceIcon;
        serviceInTree['children'] = [];

        Object.keys(service).forEach(key => {
            if (key === 'Tags') {
                service[key].forEach(tag => {
                    const mpsInTree = {};
                    mpsInTree['title'] = tag;
                    mpsInTree['className'] = treeMpsIcon;

                    serviceInTree['children'].push(mpsInTree);
                });
            }
        });

        nodeInTree['children'].push(serviceInTree);
    });

    return nodeInTree;
}

const fetchNodeView = () => async dispatch => {
    const nodesRes = await consul.get('/catalog/nodes');
    const nodes = nodesRes.data;

    for (const i in nodes) {
        const nodeRes = await consul.get(`/catalog/node/${nodes[i].Node}`);
        const node = nodeRes.data;
        
        nodeViewTreeData.push(createNodeView(node));
    }

    dispatch({
        type: 'FETCH_NODE_VIEW',
        payload: nodeViewTreeData
    }); 
};

export default fetchNodeView;
