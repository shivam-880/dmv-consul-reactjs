import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateSearchString } from '../actions/updateSearchData';
import { resetTreeNodeInfoView } from '../actions/resetTreeNodeInfoView';

class SearchBox extends Component {
    render() {
        return (
            <form className="ui form" onSubmit={e => e.preventDefault()}>
                <input
                    name='search'
                    placeholder='Search'
                    value={this.props.searchData.searchString}
                    onChange={e => {
                        this.props.updateSearchString(e.target.value);
                        if(e.target.value === '')
                            this.props.resetTreeNodeInfoView()
                    }}
                />
            </form>
        );
    }
}

const mapStateToProps = ({ searchData }) => { return { searchData } };

export default connect(mapStateToProps, { updateSearchString, resetTreeNodeInfoView })(SearchBox);

export const doSearch = ({ node, searchQuery }) => {
    if (searchQuery !== '')
        return node.title.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
    else return false;
}
