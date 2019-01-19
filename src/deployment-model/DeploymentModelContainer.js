import { connect } from 'react-redux';

import { fetchNodeView } from '../view-selector/actions';
import { updateTree } from './actions';
import { fetchNodeDetails, fetchServiceDetails, resetDetails } from '../details/actions';
import { udpateSearchFocusIndex, updateSearchFoundCount } from '../actions/updateSearchData';

import DeploymentModel from './DeploymentModel';

const mapStateToProps = ({ treeData, searchData }) => {
    return {
        treeData,
        searchString: searchData.searchString,
        searchFocusIndex: searchData.searchFocusIndex
    }
};

const DeploymentModelContainer = connect(
    mapStateToProps,
    {
        fetchNodeView,
        updateTree,
        fetchNodeDetails,
        fetchServiceDetails,
        resetDetails,
        updateSearchFoundCount,
        udpateSearchFocusIndex
    }
)(DeploymentModel);

export default DeploymentModelContainer;
