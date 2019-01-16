import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateSearchString, udpateSearchFocusIndex } from '../actions/updateSearchData';
import resetTreeNodeInfoView from '../actions/resetTreeNodeInfoView';
import fetchNodeInfo from '../actions/fetchNodeInfo';
import fetchServiceInfo from '../actions/fetchServiceInfo';
import { NODE, SERVICE, MPS } from '../types/treeNodeType';

class SearchBox extends Component {

    selectPrevMatch = () => {
        const searchFocusIndex = this.props.searchFocusIndex;
        const searchFoundCount = this.props.searchFoundCount;

        this.props.udpateSearchFocusIndex(
            searchFocusIndex !== null ? (searchFoundCount + searchFocusIndex - 1) % searchFoundCount : searchFoundCount - 1
        );
    }

    selectNextMatch = () => {
        const searchFocusIndex = this.props.searchFocusIndex;
        const searchFoundCount = this.props.searchFoundCount;

        this.props.udpateSearchFocusIndex(
            searchFocusIndex !== null ? (searchFocusIndex + 1) % searchFoundCount : 0
        );
    }

    render() {
        return (
            <form className="ui form" onSubmit={e => e.preventDefault()}>
                <input
                    name='search'
                    placeholder='Search'
                    value={this.props.searchString}
                    onChange={e => {
                        this.props.updateSearchString(e.target.value);
                        if (e.target.value === '')
                            this.props.resetTreeNodeInfoView()
                    }}
                />
                <button
                    type="button"
                    disabled={!this.props.searchFoundCount}
                    onClick={this.selectPrevMatch}
                >
                    &lt;
                </button>

                <button
                    type="button"
                    disabled={!this.props.searchFoundCount}
                    onClick={this.selectNextMatch}
                >
                    &gt;
                 </button>

                <span>
                    &nbsp;
                    {this.props.searchFoundCount > 0 ? this.props.searchFocusIndex + 1 : 0}
                    &nbsp;/&nbsp;
                    {this.props.searchFoundCount || 0}
                </span>
            </form>
        );
    }
}

const mapStateToProps = ({ searchData }) => { 
    return { 
        searchString: searchData.searchString,
        searchFocusIndex: searchData.searchFocusIndex,
        searchFoundCount: searchData.searchFoundCount
    } 
};

export default connect(
    mapStateToProps,
    {
        updateSearchString,
        udpateSearchFocusIndex,
        fetchNodeInfo,
        fetchServiceInfo,
        resetTreeNodeInfoView
    }
)(SearchBox);

export const doSearch = ({ node, searchQuery }) => {
    if (searchQuery !== '')
        return node.title.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
    else return false;
}
