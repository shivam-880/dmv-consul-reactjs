import React from 'react';

import ExpandCollapseAllContainer from '../expand-collapse-all/ExpandCollapseAllContainer';
import DeploymentModelContainer from '../deployment-model/DeploymentModelContainer';
import DetailsContainer from '../details/DetailsContainer';
import ViewSelectorContainer from '../view-selector/ViewSelectorContainer';
import SearchBoxContainer from '../search-box/SearchBoxContainer';

import '../style.css';
import { Wrapper, Header } from './StyledComponent';

const App = () => {
  return (
    <div className='ui container'>
      <div className='ui three column grid'>
        <Header className='row'>
          <ExpandCollapseAllContainer />
          <div className='column'>
            <SearchBoxContainer />
          </div>
        </Header>
        <div className='row'>
          <Wrapper className= 'two wide column'>
            <ViewSelectorContainer />
          </Wrapper>
          <DeploymentModelContainer />
          <div className='column'>
            <DetailsContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
