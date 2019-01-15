import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateSearchString } from '../actions/updateSearchData';

class SearchBox extends Component {
    componentDidMount() {
        this.props.updateSearchString('');
    }

    render() {
        return (
            <form className="ui form" onSubmit={e => e.preventDefault()}>
                <input
                    name='search'
                    placeholder='Search'
                    defaultValue={this.props.searchData.searchString}
                    onChange={e => this.props.updateSearchString(e.target.value)}
                />
            </form>
        );
    }
}

const mapStateToProps = ({ searchData }) => { return { searchData } };

export default connect(mapStateToProps, { updateSearchString })(SearchBox);

export const doSearch = ({ node, searchQuery }) => {
    if (searchQuery !== '')
        return node.title.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
    else return false;
}
