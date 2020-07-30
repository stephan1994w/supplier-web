import React from 'react';

import { SessionManager } from '@sg-utils/auth';
import { AdvancedProvider as AuthProvider } from '@sg-utils/auth/auth';

import Routes from './routes'

import configFile from './config/env.json';

const { awsConfig, ...other } = configFile;
const config = { ...awsConfig, ...other };

SessionManager.configureAmplify(config);

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
