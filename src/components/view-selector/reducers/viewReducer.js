import { FETCH_NODE_VIEW, FETCH_SERVICE_VIEW, FETCH_TAG_VIEW } from '../actionTypes';
import { NODE_VIEW, SERVICE_VIEW, TAG_VIEW } from '../../../common/types/view';

const viewReducer = (view = '', { type }) => {
    if (type === FETCH_NODE_VIEW)
        return NODE_VIEW;
    if (type === FETCH_SERVICE_VIEW)
        return SERVICE_VIEW;
    if (type === FETCH_TAG_VIEW)
        return TAG_VIEW;

    return view;
}

export default viewReducer;
