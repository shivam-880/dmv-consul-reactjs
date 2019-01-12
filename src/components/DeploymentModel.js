import React, { Component } from 'react';
import { connect } from 'react-redux';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

import '../style.css';

import fetchNodeView from '../actions/fetchNodeView';
import updateView from '../actions/updateView';

class DeploymentModel extends Component {
    componentDidMount() {
        this.props.fetchNodeView();
    }

    render() {
        return (
            <SortableTree
                treeData={this.props.treeData}
                onChange={treeData => this.props.updateView(treeData)}
                canDrag={false}
                generateNodeProps={
                    ({ node, path }) => ({
                        title: (<span><i className={node.className}></i>{node.title}</span>)
                    })
                }
            />
        );
    }
}

const mapStateToProps = ({ treeData }) => {
    return { treeData };
}

export default connect(mapStateToProps, { fetchNodeView, updateView })(DeploymentModel);
