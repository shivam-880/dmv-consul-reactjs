import React from 'react';
import { StyledViewSelector, Node, Service, Tag } from './StyledComponents';

const ViewSelector = ({
    view,
    fetchNodeView,
    fetchServiceView,
    fetchTagView
}) => {
    return (
        <StyledViewSelector>
            <Node view={view} onClick={fetchNodeView}></Node>
            <Service view={view} onClick={fetchServiceView}></Service>
            <Tag view={view} onClick={fetchTagView}></Tag>
        </StyledViewSelector>
    );
}

export default ViewSelector;
