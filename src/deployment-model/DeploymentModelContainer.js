import { connect } from 'react-redux';

import { fetchNodeView } from '../view-selector/actions';
import { updateTree } from './actions';
import { fetchNodeDetails, fetchServiceDetails, resetDetails } from '../details/actions';
import { udpateSearchFocusIndex, updateSearchFoundCount } from '../search-box/actions';

import DeploymentModel from './DeploymentModel';

const mapStateToProps = ({ treeData, search }) => {
    return {
        treeData,
        searchString: search.searchString,
        searchFocusIndex: search.searchFocusIndex
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
