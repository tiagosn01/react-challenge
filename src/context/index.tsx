import React from 'react';

import { ServerProvider } from './servers';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => (
  <ServerProvider>{children}</ServerProvider>
);

export default AppProvider;
