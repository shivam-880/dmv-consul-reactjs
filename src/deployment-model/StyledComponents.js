import styled from 'styled-components';
import { SERVICE, NODE, MPS } from '../common/types/tree';

export const StyledDeploymentModel = styled.div`
    height: 100%;
    width: 54%;
    border: 1px solid rgba(34,36,38,.15);
    border-radius: 5px;
`;

const attachIconClassNameProps = ({ type }) => {
    if (type === NODE)
        return { className: 'fa fa-laptop' };
    if (type === SERVICE)
        return { className: 'fa fa-cogs' };
    if (type === MPS)
        return { className: 'fa fa-user-o' };

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
    &.fa-user-o:hover {
        background-color: #F6F6F6;
    }
    &.fa-user-o {
        cursor: auto !important;
    }
`;

export const Icon = styled.i.attrs(props => (attachIconClassNameProps(props)))`${iconStyle}`;
