import { connect } from 'react-redux';

import fetchNodeView from '../actions/fetchNodeView';
import fetchServiceView from '../actions/fetchServiceView';
import fetchMpsView from '../actions/fetchMpsView';

import ViewSelector from './ViewSelector';

const mapStateToProps = ({ treeView }) => { return { treeView } };

const ViewSelectorContainer = connect(mapStateToProps, { fetchNodeView, fetchServiceView, fetchMpsView })(ViewSelector);

export default ViewSelectorContainer;
