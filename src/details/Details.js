import React from 'react';

const renderKeyValue = info => {
        return Object.keys(info).map(key => {
            return (
                <tr key={info[key]}>
                    <td className='key'>{key.replace(/^\w/, c => c.toUpperCase())}</td>
                    <td>{info[key]}</td>
                </tr>
            );
        });
    }

const renderInfo = (details) => {
        return details.map(info => {
            return (
                <table className='ui celled striped table' key={Math.random()}>
                    <tbody>
                        {renderKeyValue(info)}
                    </tbody>
                </table>
            );
        });
    }

const Details = props => {
    return (
        <div className='info-view'>{renderInfo(props.details)}</div>
    );
}

export default Details;
