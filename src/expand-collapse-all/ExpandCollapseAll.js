import React, { Component } from 'react';
import { toggleExpandedForAll } from 'react-sortable-tree';

import { expandAllIcon, collapseAllIcon } from '../icons';

const ExpandCollapseAll = ({
    treeData,
    updateTree
}) => {
    const toggleNodeExpansion = expanded => () => {
        updateTree(toggleExpandedForAll({
            treeData,
            expanded
        }));
    };

    return (
        <>
            <i className={expandAllIcon} onClick={toggleNodeExpansion(true)}></i>
            <i className={collapseAllIcon} onClick={toggleNodeExpansion(false)}></i>
        </>
    );
}

export default ExpandCollapseAll;
