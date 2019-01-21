import React from 'react';

import ExpandCollapseAllContainer from '../expand-collapse-all/ExpandCollapseAllContainer';
import DeploymentModelContainer from '../deployment-model/DeploymentModelContainer';
import DetailsContainer from '../details/DetailsContainer';
import ViewSelectorContainer from '../view-selector/ViewSelectorContainer';
import SearchBoxContainer from '../search-box/SearchBoxContainer';

import { Wrapper, Header, GlobalStyle } from './StyledComponent';

const App = () => {
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

export default App;
