import React from 'react';

import ViewSelector from './ViewSelector';
import ExpandCollapseAll from './ExpandCollapseAll';
import DeploymentModelView from './DeploymentModelView';
import InfoView from './InfoView';

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
            <DeploymentModelView />
          </div>
          <div className="column">
            <InfoView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
