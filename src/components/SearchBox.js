import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchBox extends Component {
    renderInput(formProps) {
        return <input {...formProps.input} placeholder='Search' />
    }

    render() {
        return (
            <form className="ui form">
                <Field name='search' component={this.renderInput} />
            </form>
        );
    }
}

export default reduxForm({
    form: 'SearchBox'
})(SearchBox);

export const doSearch = ({ node, searchQuery }) => {
    if(null != searchQuery)
        return node.title.toLowerCase().indexOf(searchQuery.search.toLowerCase()) > -1;
    else return false;
}
