import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleExpandedForAll } from 'react-sortable-tree';

import updateTree from '../actions/updateTree';
import { expandAllIcon, collapseAllIcon } from '../icons';

class ExpandCollapseAll extends Component {
    toggleNodeExpansion = expanded => () => {
        this.props.updateTree(toggleExpandedForAll({
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

export default connect(mapStateToProps, { updateTree })(ExpandCollapseAll);
