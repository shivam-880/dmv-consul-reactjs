import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

import { NODE, SERVICE, MPS } from '../common/types/tree';
import doSearch from '../search-box/doSearch';
import { StyledDeploymentModel, Icon, GlobalStyle } from './StyledComponents';

class DeploymentModel extends Component {
    componentDidMount() {
        this.props.fetchNodeView();
    }

    searchFinishCallback = matches => {
        this.props.updateFoundCount(matches.length);
        this.props.udpateFocusIndex(
            matches.length > 0 ? this.props.focusIndex % matches.length : 0
        );

        if (matches.length > 0)
            this.fetchInfo(matches[this.props.focusIndex].node)();
    }

    fetchInfo = ({ type, title, parent = '' }) => () => {
        if (type === NODE)
            this.props.fetchNodeDetails(title);

        if (type === SERVICE)
            this.props.fetchServiceDetails(title, parent);

        if (type === MPS)
            this.props.resetDetails();
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
                            title: (<span><Icon type={node.type} onClick={this.fetchInfo(node)}></Icon>{node.title}</span>)
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
