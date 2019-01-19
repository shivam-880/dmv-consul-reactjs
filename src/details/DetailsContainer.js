import { connect } from 'react-redux';
import Details from './Details';

const mapStateToProps = ({ treeNodeInfo }) => {
    return { details: treeNodeInfo };
}

const DetailsContainer = connect(mapStateToProps)(Details);

export default DetailsContainer;
