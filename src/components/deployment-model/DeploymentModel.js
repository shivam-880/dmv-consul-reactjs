import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

import { NODE, SERVICE, MPS } from '../../common/types/tree';
import doSearch from '../search-box/doSearch';
import { StyledDeploymentModel, Icon, GlobalStyle } from './StyledComponents';

class DeploymentModel extends Component {
    componentDidMount() {
        this.props.fetchNodeView();
        this.icons = {};
        this.selected = -1;
        this.lastSelectedIconId = -1;
        this.lastSelectedIconClassName = '';
    }

    searchFinishCallback = matches => {
        this.props.updateFoundCount(matches.length);
        this.props.udpateFocusIndex(
            matches.length > 0 ? this.props.focusIndex % matches.length : 0
        );

        if (matches.length > 0)
            this.fetchInfo(matches[this.props.focusIndex].node);
    }

    fetchInfo = ({ type, title, parent = '' }) => {
        if (type === NODE)
            this.props.fetchNodeDetails(title);

        if (type === SERVICE)
            this.props.fetchServiceDetails(title, parent);

        if (type === MPS)
            this.props.resetDetails();
    }

    onIconClick = (e, node) => {
        this.fetchInfo(node);

        this.selected = e.target.id;

        if (this.lastSelectedIconId > 0)
            this.icons[this.lastSelectedIconId].setAttribute('class', this.lastSelectedIconClassName);

        this.lastSelectedIconId = e.target.id;
        this.lastSelectedIconClassName = this.icons[e.target.id].className;

        const c = this.icons[e.target.id].className;
        this.icons[e.target.id].setAttribute('class', c + ' selected');
    }

    selfRegister = ic => {
        if (ic !== null)
            this.icons[ic.id] = ic;
    }

    render() {
        return (
            <StyledDeploymentModel>
                <GlobalStyle />
                <SortableTree
                    treeData={this.props.treeData}
                    onChange={treeData => this.props.updateTree(treeData)}
                    canDrag={false}
                    generateNodeProps={
                        ({ node, path }) => ({
                            title: (
                                <span>
                                    <Icon
                                        id={node.id}
                                        ref={ic => this.selfRegister(ic)}
                                        type={node.type}
                                        selected={this.selected}
                                        onClick={e => this.onIconClick(e, node)}
                                    ></Icon>
                                    {node.title}
                                </span>
                            )
                        })
                    }
                    searchMethod={doSearch}
                    searchQuery={this.props.keyword}
                    searchFocusOffset={this.props.focusIndex}
                    searchFinishCallback={matches => this.searchFinishCallback(matches)}
                />
            </StyledDeploymentModel>
        );
    }
}

export default DeploymentModel;
