import { connect } from 'react-redux';

import { fetchNodeView } from '../view-selector/actions';
import { updateTree } from './actions';
import { fetchNodeDetails, fetchServiceDetails, resetDetails } from '../details/actions';
import { udpateFocusIndex, updateSearchFoundCount } from '../search-box/actions';

import DeploymentModel from './DeploymentModel';

const mapStateToProps = ({ treeData, search }) => {
    const { keyword, focusIndex } = search;
    return { treeData, keyword, focusIndex };
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
        udpateFocusIndex
    }
)(DeploymentModel);

export default DeploymentModelContainer;
