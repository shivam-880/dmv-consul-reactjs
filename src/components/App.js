import React from 'react';

import ViewSelector from './ViewSelector';
import ExpandCollapseAll from './ExpandCollapseAll';
import DeploymentModel from './DeploymentModel';
import Info from './Info';

const App = () => {
  return (
    <div className="ui container">
      <div className="ui three column grid">
        <div className="row">
          <div className="column">
            <ViewSelector />
          </div>
          <div className="column">
            <ExpandCollapseAll />
          </div>
        </div>
        <div className="row">
          <div className="tree-view">
            <DeploymentModel />
          </div>
          <div className="column">
            <Info />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
