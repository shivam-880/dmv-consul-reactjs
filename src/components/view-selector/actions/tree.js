import { SERVICE, NODE, TAG } from '../../../common/types/tree';

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

export const Tag = (title, parent = '', children = []) => {
    return {
        'id': Math.random(),
        'title': title,
        'type': TAG,
        'parent': parent,
        'children': children
    };
}
