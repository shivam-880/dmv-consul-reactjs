import { connect } from 'react-redux';

import { fetchNodeView, fetchServiceView, fetchMpsView } from './actions';

import ViewSelector from './ViewSelector';

const mapStateToProps = ({ treeView }) => { return { treeView } };

const ViewSelectorContainer = connect(mapStateToProps, { fetchNodeView, fetchServiceView, fetchMpsView })(ViewSelector);

export default ViewSelectorContainer;
