import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    .container {
        width: 90% !important;
        margin-top: 15px;
    }
    i {
        cursor: pointer;
    }
    .selected {
        background-color: #D9D9D9;
    }
`;

export const Header = styled.div`
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin-bottom: 10px;
    margin-top: 30px;
`;

export const Wrapper = styled.div`
    display: flex !important;
    justify-content: space-evenly !important;
    flex-direction: column !important;
`;
