import React from 'react';
import { toggleExpandedForAll } from 'react-sortable-tree';

import { ExpandAll, CollapseAll } from './StyledComponents';

const ExpandCollapseAll = ({ treeData, updateTree }) => {
    const toggleNodeExpansion = expanded => () => {
        updateTree(toggleExpandedForAll({ treeData, expanded }));
    };

    return (
        <>
            <ExpandAll onClick={toggleNodeExpansion(true)}></ExpandAll>
            <CollapseAll onClick={toggleNodeExpansion(false)}></CollapseAll>
        </>
    );
}

export default ExpandCollapseAll;
