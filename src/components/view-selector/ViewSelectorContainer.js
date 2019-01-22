import { connect } from 'react-redux';

import { fetchNodeView, fetchServiceView, fetchTagView } from './actions';

import ViewSelector from './ViewSelector';

const mapStateToProps = ({ view }) => { return { view } };

const ViewSelectorContainer = connect(mapStateToProps, { fetchNodeView, fetchServiceView, fetchTagView })(ViewSelector);

export default ViewSelectorContainer;
