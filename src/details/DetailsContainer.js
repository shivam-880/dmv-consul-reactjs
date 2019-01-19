import { connect } from 'react-redux';
import Details from './Details';

const mapStateToProps = ({ details }) => {
    return { details };
}

const DetailsContainer = connect(mapStateToProps)(Details);

export default DetailsContainer;
