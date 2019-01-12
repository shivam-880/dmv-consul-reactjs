import React from 'react';

import ViewSelector from './ViewSelector';
import ExpandCollapseAll from './ExpandCollapseAll';
import DeploymentModel from './DeploymentModel';

const App = () => {
  return (
    <div className="ui container centered row">
      <ViewSelector />
      <ExpandCollapseAll />
      <DeploymentModel />
    </div>
  );
};

export default App;
