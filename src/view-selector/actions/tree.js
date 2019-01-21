import { SERVICE, NODE, MPS } from '../../common/types/tree';

export const Node = (title, parent = '', children = []) => {
    return {
        'title': title,
        'type': NODE,
        'parent': parent,
        'children': children
    };
}

export const Service = (title, parent = '', children = []) => {
    return {
        'title': title,
        'type': SERVICE,
        'parent': parent,
        'children': children
    };
}

export const Mps = (title, parent = '', children = []) => {
    return {
        'title': title,
        'type': MPS,
        'parent': parent,
        'children': children
    };
}
