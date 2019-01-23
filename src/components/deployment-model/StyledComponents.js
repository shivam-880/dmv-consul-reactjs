import styled, { createGlobalStyle } from 'styled-components';
import { SERVICE, NODE, TAG } from '../../common/types/tree';

export const GlobalStyle = createGlobalStyle`
    .rst__rowContents {
        padding-left: 0px !important;
        border: 1px solid rgba(34,36,38,.15) !important;
        border-radius: 5px !important;
    }
    .rst__rowTitle {
        font-family: monospace !important;
    }
    .rst__rowSearchFocus {
        outline: 0 !important;
        box-shadow: 0 0 4pt 1pt #C4D613 !important;
        border-radius: 5px !important;
    }
    .rst__rowSearchMatch {
        outline: 0 !important;
        box-shadow: 0 0 4pt 1pt #FCE904;
        border-radius: 5px !important;
    }
`;

export const StyledDeploymentModel = styled.div`
    height: 100%;
    width: 54%;
    border: 1px solid rgba(34,36,38,.15);
    border-radius: 5px;
`;

const attachClassNameProps = ({ id, type, selected }) => {
    if (type === NODE)
        return (selected == id) ? { className: 'fa fa-laptop selected' } : { className: 'fa fa-laptop' };

    if (type === SERVICE)
        return (selected == id) ? { className: 'fa fa-cogs selected' } : { className: 'fa fa-cogs' };

    if (type === TAG)
        return { className: 'fa fa-tag' };

    return { className: '' };
}

const iconStyle = `
	border-right: solid 1px rgba(34,36,38,.15);
	padding: 12px;
	font-size: 16px;
	margin-right: 10px;
	color: #5d5c5c;
	background-color: #F6F6F6;
    &:hover {
	    background-color: #D9D9D9;
    }
    &.fa-tag:hover {
        background-color: #F6F6F6;
    }
    &.fa-tag {
        cursor: auto !important;
    }
`;

export const Icon = styled.i.attrs(props => (attachClassNameProps(props))) `${iconStyle}`;
