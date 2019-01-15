import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchNodeView from '../actions/fetchNodeView';
import fetchServiceView from '../actions/fetchServiceView';
import fetchMpsView from '../actions/fetchMpsView';
import { selectorNodeIcon, selectorServiceIcon, selectorMpsIcon } from '../icons';

class ViewSelector extends Component {
    render() {
        return (
            <div className="view-selector">
                <i className={selectorNodeIcon} onClick={this.props.fetchNodeView}></i>
                <i className={selectorServiceIcon} onClick={this.props.fetchServiceView}></i>
                <i className={selectorMpsIcon} onClick={this.props.fetchMpsView}></i>
            </div>
        );
    }
}

export default connect(null, { fetchNodeView, fetchServiceView, fetchMpsView })(ViewSelector);
