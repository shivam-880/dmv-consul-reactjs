import React, { Component } from 'react';
import { connect } from 'react-redux';

class Info extends Component {
    render() {
        console.log(JSON.stringify(this.props.treeNodeInfo));
        return (<div></div>
            // <table className='ui celled striped table'>
            //     <tbody>
            //         <tr>
            //             <td className='key'>Hostname</td>
            //             <td>{this.props.nodeInfos[0].hostname}</td>
            //         </tr>
            //         <tr>
            //             <td className='key'>Interface</td>
            //             <td>{this.props.nodeInfos[0].interface}</td>
            //         </tr>
            //         <tr>
            //             <td className='key'>Status</td>
            //             <td>{this.props.nodeInfos[0].status}</td>
            //         </tr>
            //     </tbody>
            // </table>
        );
    }
}

const mapStateToProps = ({ treeNodeInfo }) => {
    return { treeNodeInfo };
}

export default connect(mapStateToProps)(Info);
