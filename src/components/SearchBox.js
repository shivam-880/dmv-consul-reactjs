import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateSearchString, udpateSearchFocusIndex } from '../actions/updateSearchData';
import { resetTreeNodeInfoView } from '../actions/resetTreeNodeInfoView';
import fetchNodeInfo from '../actions/fetchNodeInfo';
import fetchServiceInfo from '../actions/fetchServiceInfo';

class SearchBox extends Component {

    selectPrevMatch = () => {
        const searchFocusIndex = this.props.searchData.searchFocusIndex;
        const searchFoundCount = this.props.searchData.searchFoundCount;

        this.props.udpateSearchFocusIndex(
            searchFocusIndex !== null ? (searchFoundCount + searchFocusIndex - 1) % searchFoundCount : searchFoundCount - 1
        );
    }

    selectNextMatch = () => {
        const searchFocusIndex = this.props.searchData.searchFocusIndex;
        const searchFoundCount = this.props.searchData.searchFoundCount;

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
                    value={this.props.searchData.searchString}
                    onChange={e => {
                        this.props.updateSearchString(e.target.value);
                        if (e.target.value === '')
                            this.props.resetTreeNodeInfoView()
                    }}
                />
                <button
                    type="button"
                    disabled={!this.props.searchData.searchFoundCount}
                    onClick={this.selectPrevMatch}
                >
                    &lt;
                </button>

                <button
                    type="button"
                    disabled={!this.props.searchData.searchFoundCount}
                    onClick={this.selectNextMatch}
                >
                    &gt;
                 </button>

                <span>
                    &nbsp;
                    {this.props.searchData.searchFoundCount > 0 ? this.props.searchData.searchFocusIndex + 1 : 0}
                    &nbsp;/&nbsp;
                    {this.props.searchData.searchFoundCount || 0}
                </span>
            </form>
        );
    }
}

const mapStateToProps = ({ searchData }) => { return { searchData } };

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
