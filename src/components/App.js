import React from 'react';

import ViewSelector from './ViewSelector';
import ExpandCollapseAll from './ExpandCollapseAll';
import DeploymentModel from './DeploymentModel';
import Info from './Info';

const App = () => {
  return (
    <div className="ui container">
      <div class="ui three column grid">
        <div class="row">
          <div class="column">
            <ViewSelector />
          </div>
          <div class="column">
            <ExpandCollapseAll />
          </div>
        </div>
        <div class="row">
          <div class="tree-view">
            <DeploymentModel />
          </div>
          <div class="column">
            <Info />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
