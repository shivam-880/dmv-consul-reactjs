import { SERVICE, NODE, MPS } from '../../common/types/tree';
import { treeNodeIcon, treeServiceIcon, treeMpsIcon } from '../../common/icons';

export const Node = (title, parent = '', children = []) => {
    return {
        'title': title,
        'className': treeNodeIcon,
        'type': NODE,
        'parent': parent,
        'children': children
    };
}

export const Service = (title, parent = '', children = []) => {
    return {
        'title': title,
        'className': treeServiceIcon,
        'type': SERVICE,
        'parent': parent,
        'children': children
    };
}

export const Mps = (title, parent = '', children = []) => {
    return {
        'title': title,
        'className': treeMpsIcon,
        'type': MPS,
        'parent': parent,
        'children': children
    };
}
