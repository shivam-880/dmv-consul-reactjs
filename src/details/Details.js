import React from 'react';

const Details = ({ details }) => {
    const renderKV = detail => {
        return Object.keys(detail).map(key => {
            return (
                <tr key={detail[key]}>
                    <td className='key'>{key.replace(/^\w/, c => c.toUpperCase())}</td>
                    <td>{detail[key]}</td>
                </tr>
            );
        });
    }

    const renderDetails = details => {
        return details.map(detail => {
            return (
                <table className='ui celled striped table' key={Math.random()}>
                    <tbody>
                        {renderKV(detail)}
                    </tbody>
                </table>
            );
        });
    }

    return (
        <div className='info-view'>{renderDetails(details)}</div>
    );
}

export default Details;
