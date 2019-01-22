import { SERVICE, NODE, MPS } from '../../../common/types/tree';

export const Node = (title, parent = '', children = []) => {
    return {
        'id': Math.random(),
        'title': title,
        'type': NODE,
        'parent': parent,
        'children': children
    };
}

export const Service = (title, parent = '', children = []) => {
    return {
        'id': Math.random(),
        'title': title,
        'type': SERVICE,
        'parent': parent,
        'children': children
    };
}

export const Mps = (title, parent = '', children = []) => {
    return {
        'id': Math.random(),
        'title': title,
        'type': MPS,
        'parent': parent,
        'children': children
    };
}
