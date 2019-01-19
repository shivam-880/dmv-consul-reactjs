import styled from 'styled-components';

export const ExpandAll = styled.i.attrs({
    className: 'fa fa-plus-square fa-lg'
})`
    padding: 5px;
    color: #5d5c5c;
    font-size: 1.4em;
    &:hover{
        color: #D9D9D9;
    }
`;

export const CollapseAll = styled.i.attrs({
    className: 'fa fa-minus-square fa-lg'
})`
    padding: 5px;
    color: #5d5c5c;
    font-size: 1.4em;
    &:hover{
        color: #D9D9D9;
    }
`;
