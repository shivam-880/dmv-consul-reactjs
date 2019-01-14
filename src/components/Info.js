import React, { Component } from 'react';
import { connect } from 'react-redux';

class Info extends Component {

    renderKeyValue(info) {
        return Object.keys(info).map(key => {
            return (
                <tr key={info[key]}>
                    <td className='key'>{key.replace(/^\w/, c => c.toUpperCase())}</td>
                    <td>{info[key]}</td>
                </tr>
            );
        });
    }

    renderInfo() {
        return this.props.treeNodeInfo.map(info => {
            return (
                <table className='ui celled striped table' key={Math.random()}>
                    <tbody>
                        {this.renderKeyValue(info)}
                    </tbody>
                </table>
            );
        });
    }

    render() {
        return (
            <div>{this.renderInfo()}</div>
        );
    }
}

const mapStateToProps = ({ treeNodeInfo }) => {
    return { treeNodeInfo };
}

export default connect(mapStateToProps)(Info);
