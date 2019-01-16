import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleExpandedForAll } from 'react-sortable-tree';

import updateView from '../actions/updateView';
import { expandAllIcon, collapseAllIcon } from '../icons';

class ExpandCollapseAll extends Component {
    toggleNodeExpansion = expanded => () => {
        this.props.updateView(toggleExpandedForAll({
            treeData: this.props.treeData,
            expanded
        }));
    };

    render() {
        return (
            <>
                <i className={expandAllIcon} onClick={this.toggleNodeExpansion(true)}></i>
                <i className={collapseAllIcon} onClick={this.toggleNodeExpansion(false)}></i>
            </>
        );
    }
}

const mapStateToProps = ({ treeData }) => {
    return { treeData };
}

export default connect(mapStateToProps, { updateView })(ExpandCollapseAll);
