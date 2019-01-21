import React from 'react';
import { StyledDetails, Key, Value, Table } from './StyledComponents';

const Details = ({ details }) => {
    const renderKV = detail => {
        return Object.keys(detail).map(key => {
            return (
                <tr key={detail[key]}>
                    <Key>{key.replace(/^\w/, c => c.toUpperCase())}</Key>
                    <Value>{detail[key]}</Value>
                </tr>
            );
        });
    }

    const renderDetails = details => {
        return details.map(detail => {
            return (
                <Table key={Math.random()}>
                    <tbody>
                        {renderKV(detail)}
                    </tbody>
                </Table>
            );
        });
    }

    return (
        <StyledDetails>{renderDetails(details)}</StyledDetails>
    );
}

export default Details;
