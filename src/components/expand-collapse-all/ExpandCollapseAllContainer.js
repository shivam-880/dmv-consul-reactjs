import { connect } from 'react-redux';

import { updateTree } from '../deployment-model/actions';
import ExpandCollapseAll from './ExpandCollapseAll';

const mapStateToProps = ({ treeData }) => { 
    return { treeData }; 
}

const ExpandCollapseAllContainer = connect(mapStateToProps, { updateTree })(ExpandCollapseAll);

export default ExpandCollapseAllContainer;
