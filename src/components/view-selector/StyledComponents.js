import styled from 'styled-components';
import { NODE_VIEW, SERVICE_VIEW, MPS_VIEW } from '../../common/types/view';

export const StyledViewSelector = styled.div`
    display: flex;
    flex-direction: column;
`;

const buttonStyle = `
	border-radius: 50px;
    padding: 16px;
    font-size: 23px;
    margin-right: 10px;
	background-color: #F6F6F6;
	height: 55px;
	width: 55px;
	margin: 10px;
	color: #5d5c5c;
	text-align: center;
    &:hover {
        background-color: #D9D9D9;
    }
`;

export const Node = styled.i.attrs(props => ({
    className: (props.view === NODE_VIEW) ? 'fa fa-laptop selected' : 'fa fa-laptop'
}))`${buttonStyle}`;

export const Service = styled.i.attrs(props => ({
    className: (props.view === SERVICE_VIEW) ? 'fa fa-cogs selected' : 'fa fa-cogs'
}))`${buttonStyle}`;

export const Mps = styled.i.attrs( props => ({
    className: (props.view === MPS_VIEW) ? 'fa fa-user-o selected' : 'fa fa-user-o'
}))`${buttonStyle}`;
