import React from 'react';
import { StyledViewSelector, Node, Service, Mps } from './StyledComponents';

const ViewSelector = ({
    view,
    fetchNodeView,
    fetchServiceView,
    fetchMpsView
}) => {
    return (
        <StyledViewSelector>
            <Node view={view} onClick={fetchNodeView}></Node>
            <Service view={view} onClick={fetchServiceView}></Service>
            <Mps view={view} onClick={fetchMpsView}></Mps>
        </StyledViewSelector>
    );
}

export default ViewSelector;
