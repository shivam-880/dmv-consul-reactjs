import React from 'react';

import ExpandCollapseAllContainer from '../expand-collapse-all/ExpandCollapseAllContainer';
import DeploymentModelContainer from '../deployment-model/DeploymentModelContainer';
import DetailsContainer from '../details/DetailsContainer';
import ViewSelectorContainer from '../view-selector/ViewSelectorContainer';
import SearchBoxContainer from '../search-box/SearchBoxContainer';

import '../style.css';

const App = () => {
  return (
    <div className="ui container">
      <div className="ui three column grid">
        <div className="row header-row">
          <div>
            <ExpandCollapseAllContainer />
          </div>
          <div className="column">
            <SearchBoxContainer />
          </div>
        </div>
        <div className="row">
          <div className="two wide column view-selector-container">
            <ViewSelectorContainer />
          </div>
          <div className="tree-view">
            <DeploymentModelContainer />
          </div>
          <div className="column">
            <DetailsContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
