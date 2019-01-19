import React, { Component } from 'react';
import { connect } from 'react-redux';
import Details from './Details';

class DetailsContainer extends Component {
    render() {
        return (
            <Details details={this.props.treeNodeInfo}></Details>
        );
    }
}

const mapStateToProps = ({ treeNodeInfo }) => {
    return { treeNodeInfo };
}

export default connect(mapStateToProps)(DetailsContainer);
