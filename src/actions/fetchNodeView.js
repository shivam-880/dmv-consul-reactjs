import consul from '../apis/consul';
import { treeNodeIcon, treeServiceIcon, treeMpsIcon } from '../icons';
import { FETCH_NODE_VIEW } from './actionType';
import { NODE, SERVICE, MPS } from '../treeNodeType';

const createNodeView = nodeApiResponse => {
    const nodeName = nodeApiResponse.Node.Node;
    const services = Object.values(nodeApiResponse.Services);

    const nodeInTree = {};

    nodeInTree['title'] = nodeName;
    nodeInTree['className'] = treeNodeIcon;
    nodeInTree['type'] = NODE;
    nodeInTree['parent'] = '';
    nodeInTree['children'] = [];

    services.forEach(service => {
        const serviceInTree = {};

        serviceInTree['title'] = service.Service;
        serviceInTree['className'] = treeServiceIcon;
        serviceInTree['parent'] = nodeInTree.title;
        serviceInTree['type'] = SERVICE;
        serviceInTree['children'] = [];

        Object.keys(service).forEach(key => {
            if (key === 'Tags') {
                service[key].forEach(tag => {
                    const mpsInTree = {};
                    mpsInTree['title'] = tag;
                    mpsInTree['className'] = treeMpsIcon;
                    mpsInTree['type'] = MPS;
                    mpsInTree['parent'] = serviceInTree.title;

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

    console.log(nodeViewTreeData);

    dispatch({
        type: FETCH_NODE_VIEW,
        payload: nodeViewTreeData
    }); 
};

export default fetchNodeView;
