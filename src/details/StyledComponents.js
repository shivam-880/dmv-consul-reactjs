import styled from 'styled-components';

export const StyledDetails = styled.div`
    height: 500px;
    padding-right: 5px;
    overflow: auto;
`;

export const Table = styled.table.attrs({
    className: 'ui celled striped table'
})`
    font-family: monospace;
`;

export const Key = styled.td`
    font-weight: bold;
`;

export const Value = styled.td``;
