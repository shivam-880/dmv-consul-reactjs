import React, { Component } from 'react';
import { connect } from 'react-redux';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

import '../style.css';

import fetchNodeView from '../actions/fetchNodeView';
import updateView from '../actions/updateView';
import fetchNodeInfo from '../actions/fetchNodeInfo';
import fetchServiceInfo from '../actions/fetchServiceInfo';
import { udpateSearchFocusIndex, updateSearchFoundCount, updateSearchMatches } from '../actions/updateSearchData';
import { NODE, SERVICE } from '../types/treeNodeType';
import { doSearch } from './SearchBox';

class DeploymentModel extends Component {
    componentDidMount() {
        this.props.fetchNodeView();
    }

    fetchInfo = ({ type, title, parent = '' }) => () => {
        if (type === NODE)
            this.props.fetchNodeInfo(title);

        if (type === SERVICE)
            this.props.fetchServiceInfo(title, parent);
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
                searchQuery={this.props.searchData.searchString}
                searchFocusOffset={this.props.searchData.searchFocusIndex}
                searchFinishCallback={matches => {
                    this.props.updateSearchFoundCount(matches.length);
                    this.props.udpateSearchFocusIndex(
                        matches.length > 0 ? this.props.searchData.searchFocusIndex % matches.length : 0
                    );
                    
                    if (matches.length > 0)
                        this.fetchInfo(matches[0].node)();
                    
                    this.props.updateSearchMatches(matches);
                }}
            />
        );
    }
}

const mapStateToProps = ({ treeData, searchData }) => { return { treeData, searchData } };

export default connect(
    mapStateToProps,
    {
        fetchNodeView,
        updateView,
        fetchNodeInfo,
        fetchServiceInfo,
        updateSearchFoundCount,
        udpateSearchFocusIndex,
        updateSearchMatches
    }
)(DeploymentModel);
