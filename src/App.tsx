import React from 'react';

import LoginProvider from './lib/LoginProvider';
import RoutesApp from './components/RoutesApp/RoutesApp';

function App(): JSX.Element {
  return (
    <LoginProvider>
      <RoutesApp />
    </LoginProvider>
  );
}

export default App;
