import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectorNodeIcon, selectorServiceIcon, selectorMpsIcon } from '../icons';
import { NODE_VIEW, SERVICE_VIEW, MPS_VIEW } from '../types/treeViewType';

const ViewSelector = ({
    treeView,
    fetchNodeView,
    fetchServiceView,
    fetchMpsView
}) => {
    return (
        <div className="view-selector">
            <i className={selectorNodeIcon + ((treeView === NODE_VIEW) ? ' selected' : '')} onClick={fetchNodeView}></i>
            <i className={selectorServiceIcon + ((treeView === SERVICE_VIEW) ? ' selected' : '')} onClick={fetchServiceView}></i>
            <i className={selectorMpsIcon + ((treeView === MPS_VIEW) ? ' selected' : '')} onClick={fetchMpsView}></i>
        </div>
    );
}

export default ViewSelector;
