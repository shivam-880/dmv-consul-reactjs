import styled from 'styled-components';

export const StyledSearchBox = styled.form`
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

export const Input = styled.input`
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

const buttonStyle = `
    margin: 4px;
    padding-left: 5px;
    padding-right: 7px;
    color: grey;
    text-align: center;
    &:hover {
        color: rgba(34,36,38,.15);
    }
`;

export const Previous = styled.i.attrs({
    className: 'fa fa-sort-up fa-2x'
})`${buttonStyle}`;

export const Next = styled.i.attrs({
    className: 'fa fa-sort-down fa-2x'
})`${buttonStyle}`;

export const Cancel = styled.i.attrs({
    className: 'fa fa-times fa-lg'
})`${buttonStyle}`;
