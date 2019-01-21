import styled from 'styled-components';

export const HeaderRow = styled.div.attrs(props => ({
    className: 'row'
}))`
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin-bottom: 10px;
    margin-top: 30px;
`;

export const ViewSelectorColumnWrapper = styled.div.attrs(props => ({
    className: 'two wide column'
}))`
    display: flex !important;
    justify-content: space-evenly !important;
    flex-direction: column !important;
`;
