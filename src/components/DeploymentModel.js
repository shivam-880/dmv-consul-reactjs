import React, { Component } from 'react';
import { connect } from 'react-redux';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

import '../style.css';

import fetchNodeView from '../actions/fetchNodeView';
import updateView from '../actions/updateView';
import fetchNodeInfo from '../actions/fetchNodeInfo';
import { NODE, SERVICE } from '../treeNodeType';

class DeploymentModel extends Component {
    componentDidMount() {
        this.props.fetchNodeView();
    }

    fetchInfo = (type, title) => () => {
        if (type === NODE) {
            this.props.fetchNodeInfo(title);
        }

        if (type === SERVICE) {
            // this.props.fetchServiceInfo(title);
        }
    }

    render() {
        return (
            <SortableTree
                treeData={this.props.treeData}
                onChange={treeData => this.props.updateView(treeData)}
                canDrag={false}
                generateNodeProps={
                    ({ node, path }) => ({
                        title: (<span><i className={node.className} onClick={this.fetchInfo(node.type, node.title)}></i>{node.title}</span>)
                    })
                }
            />
        );
    }
}

const mapStateToProps = ({ treeData, nodeInfo }) => {
    return { treeData, nodeInfo };
}

export default connect(mapStateToProps, { fetchNodeView, fetchNodeInfo, updateView })(DeploymentModel);
