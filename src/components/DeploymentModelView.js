import React, { Component } from 'react';
import { connect } from 'react-redux';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

import '../style.css';

import fetchNodeView from '../actions/fetchNodeView';
import updateView from '../actions/updateView';
import fetchNodeInfo from '../actions/fetchNodeInfo';
import fetchServiceInfo from '../actions/fetchServiceInfo';
import resetTreeNodeInfoView from '../actions/resetTreeNodeInfoView';
import { udpateSearchFocusIndex, updateSearchFoundCount } from '../actions/updateSearchData';
import { NODE, SERVICE, MPS } from '../types/treeNodeType';
import { doSearch } from './SearchBox';

class DeploymentModel extends Component {
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
            this.props.fetchNodeInfo(title);

        if (type === SERVICE)
            this.props.fetchServiceInfo(title, parent);

        if (type === MPS)
            this.props.resetTreeNodeInfoView();
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
                searchMethod={doSearch}
                searchQuery={this.props.searchString}
                searchFocusOffset={this.props.searchFocusIndex}
                searchFinishCallback={matches => this.searchFinishCallback(matches)}
            />
        );
    }
}

const mapStateToProps = ({ treeData, searchData }) => {
    return {
        treeData,
        searchString: searchData.searchString,
        searchFocusIndex: searchData.searchFocusIndex
    }
};

export default connect(
    mapStateToProps,
    {
        fetchNodeView,
        updateView,
        fetchNodeInfo,
        fetchServiceInfo,
        resetTreeNodeInfoView,
        updateSearchFoundCount,
        udpateSearchFocusIndex
    }
)(DeploymentModel);
