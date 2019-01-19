import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

import { NODE, SERVICE, MPS } from '../types/treeNodeType';
import doSearch from '../search-box/doSearch';

class DeploymentModel extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchNodeView();
    }

    searchFinishCallback = matches => {
        this.props.updateSearchFoundCount(matches.length);
        this.props.udpateSearchFocusIndex(
            matches.length > 0 ? this.props.searchFocusIndex % matches.length : 0
        );

        if (matches.length > 0)
            this.fetchInfo(matches[this.props.searchFocusIndex].node)();
    }

    fetchInfo = ({ type, title, parent = '' }) => () => {
        if (type === NODE)
            this.props.fetchNodeDetails(title);

        if (type === SERVICE)
            this.props.fetchServiceDetails(title, parent);

        if (type === MPS)
            this.props.resetDetails();
    }

    render() {
        return (
            <SortableTree
                treeData={this.props.treeData}
                onChange={treeData => this.props.updateTree(treeData)}
                canDrag={false}
                generateNodeProps={
                    ({ node, path }) => ({
                        title: (<span><i className={node.className} onClick={this.fetchInfo(node)}></i>{node.title}</span>)
                    })
                }
                searchMethod={doSearch}
                searchQuery={this.props.searchString}
                searchFocusOffset={this.props.searchFocusIndex}
                searchFinishCallback={matches => this.searchFinishCallback(matches)}
            />
        );
    }
}

export default DeploymentModel;
