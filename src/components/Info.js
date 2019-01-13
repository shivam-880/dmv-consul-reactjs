import React, { Component } from 'react';
import { connect } from 'react-redux';

class Info extends Component {
    render() {
        return (
            <table className='ui celled striped table'>
                <tbody>
                    <tr>
                        <td className='key'>Hostname</td>
                        <td>{this.props.nodeInfo.hostname}</td>
                    </tr>
                    <tr>
                        <td className='key'>Interface</td>
                        <td>{this.props.nodeInfo.interface}</td>
                    </tr>
                    <tr>
                        <td className='key'>Status</td>
                        <td>{this.props.nodeInfo.status}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = ({ nodeInfo }) => {
    return { nodeInfo };
}

export default connect(mapStateToProps)(Info);
