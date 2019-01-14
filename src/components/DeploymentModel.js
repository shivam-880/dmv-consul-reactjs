import React, { Component } from 'react';
import { connect } from 'react-redux';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

import '../style.css';

import fetchNodeView from '../actions/fetchNodeView';
import updateView from '../actions/updateView';
import fetchNodeInfo from '../actions/fetchNodeInfo';
import fetchServiceInfo from '../actions/fetchServiceInfo';
import { NODE, SERVICE } from '../types/treeNodeType';

class DeploymentModel extends Component {
    componentDidMount() {
        this.props.fetchNodeView();
    }

    fetchInfo = (node) => () => {
        let {type, title} = node;
        if (type === NODE)
            this.props.fetchNodeInfo(title);

        if (type === SERVICE)
            this.props.fetchServiceInfo(title);
    }

    render() {
        return (
            <SortableTree
                treeData={this.props.treeData}
                onChange={treeData => this.props.updateView(treeData)}
                canDrag={false}
                generateNodeProps={
                    ({ node, path }) => ({
                        title: (<span><i className={node.className} onClick={this.fetchInfo(node)}></i>{node.title}</span>)
                    })
                }
            />
        );
    }
}

const mapStateToProps = ({ treeData }) => {
    return { treeData };
}

export default connect(mapStateToProps, { fetchNodeView, fetchNodeInfo, fetchServiceInfo, updateView })(DeploymentModel);
