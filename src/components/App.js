import React from 'react';
import DeploymentModel from './DeploymentModel';
import ViewSelector from './ViewSelector';

const App = () => {
  return (
    <div className="ui container centered row">
      <ViewSelector />
      <DeploymentModel />
    </div>
  );
};

export default App;
