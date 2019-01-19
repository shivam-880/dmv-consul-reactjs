import React from 'react';

import { selectorNodeIcon, selectorServiceIcon, selectorMpsIcon } from '../common/icons';
import { NODE_VIEW, SERVICE_VIEW, MPS_VIEW } from '../common/types/treeViewType';

const ViewSelector = ({
    view,
    fetchNodeView,
    fetchServiceView,
    fetchMpsView
}) => {
    return (
        <div className="view-selector">
            <i className={selectorNodeIcon + ((view === NODE_VIEW) ? ' selected' : '')} onClick={fetchNodeView}></i>
            <i className={selectorServiceIcon + ((view === SERVICE_VIEW) ? ' selected' : '')} onClick={fetchServiceView}></i>
            <i className={selectorMpsIcon + ((view === MPS_VIEW) ? ' selected' : '')} onClick={fetchMpsView}></i>
        </div>
    );
}

export default ViewSelector;
