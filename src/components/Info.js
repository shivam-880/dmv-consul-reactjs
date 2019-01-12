import React, { Component } from 'react';
import { connect } from 'react-redux';

class Info extends Component {
    render() {
        return (
            <table className='ui celled striped table'>
                <tbody>
                    <tr>
                        <td className='key'>Node</td>
                        <td>inblrlt-shivam</td>
                    </tr>
                    <tr>
                        <td className='key'>Interface</td>
                        <td>10.172.127.13</td>
                    </tr>
                    <tr>
                        <td className='key'>Status</td>
                        <td>Passing</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = ({ treeData }) => {
    return { treeData };
}

export default connect(mapStateToProps)(Info);
