import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchNodeView from '../actions/fetchNodeView';
import fetchServiceView from '../actions/fetchServiceView';
import fetchMpsView from '../actions/fetchMpsView';
import { selectorNodeIcon, selectorServiceIcon, selectorMpsIcon } from '../icons';
import { NODE_VIEW, SERVICE_VIEW, MPS_VIEW } from '../types/treeViewType';

class ViewSelector extends Component {
    render() {
        return (
            <div className="view-selector">
                <i className={selectorNodeIcon + ((this.props.treeView === NODE_VIEW) ? ' selected' : '')}
                    onClick={this.props.fetchNodeView}></i>
                <i className={selectorServiceIcon + ((this.props.treeView === SERVICE_VIEW) ? ' selected' : '')} onClick={this.props.fetchServiceView}></i>
                <i className={selectorMpsIcon + ((this.props.treeView === MPS_VIEW) ? ' selected' : '')} onClick={this.props.fetchMpsView}></i>
            </div>
        );
    }
}

const mapStateToProps = ({ treeView }) => { return { treeView } };

export default connect(mapStateToProps, { fetchNodeView, fetchServiceView, fetchMpsView })(ViewSelector);
