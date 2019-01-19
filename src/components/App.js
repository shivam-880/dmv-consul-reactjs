import React from 'react';

import ViewSelector from './ViewSelector';
import ExpandCollapseAll from './ExpandCollapseAll';
import DeploymentModelView from './DeploymentModelView';
// import InfoView from './InfoView';
import DetailsContainer from '../details/DetailsContainer';
import ViewSelectorContainer from '../selector/ViewSelectorContainer';
import SearchBox from './SearchBox';

const App = () => {
  return (
    <div className="ui container">
      <div className="ui three column grid">
        <div className="row header-row">
          <div>
            <ExpandCollapseAll />
          </div>
          <div className="column">
            <SearchBox />
          </div>
        </div>
        <div className="row">
          <div className="two wide column view-selector-container">
            <ViewSelectorContainer />
          </div>
          <div className="tree-view">
            <DeploymentModelView />
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
