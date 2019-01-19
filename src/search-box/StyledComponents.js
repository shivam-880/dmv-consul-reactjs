import styled from 'styled-components';

export const SearchForm = styled.form`
    width: 500px;
    border: 1px solid rgba(34,36,38,.15);
    border-radius: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const SearchInput = styled.input`
    border: 0px;
    width: 400px;
    font-family: monospace;
    &:focus {
        outline: none;
    }
`;

export const Separator = styled.div`
    border-left: 1px solid rgba(34,36,38,.15);
    height: 35px;
    margin-left: 10px;
    margin-right: 20px;
`;