import React from 'react';

import ExpandCollapseAllContainer from '../../components/expand-collapse-all/ExpandCollapseAllContainer';
import DeploymentModelContainer from '../../components/deployment-model/DeploymentModelContainer';
import DetailsContainer from '../../components/details/DetailsContainer';
import ViewSelectorContainer from '../../components/view-selector/ViewSelectorContainer';
import SearchBoxContainer from '../../components/search-box/SearchBoxContainer';

import { Wrapper, Header, GlobalStyle } from './StyledComponents';

const Root = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div className='ui container'>
        <div className='ui three column grid'>
          <Header className='row'>
            <ExpandCollapseAllContainer />
            <div className='column'>
              <SearchBoxContainer />
            </div>
          </Header>
          <div className='row'>
            <Wrapper className='two wide column'>
              <ViewSelectorContainer />
            </Wrapper>
            <DeploymentModelContainer />
            <div className='column'>
              <DetailsContainer />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Root;
