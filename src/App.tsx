import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom"
import AppProvider from './context';
import Routes from "./routes"

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <AppProvider>
          <Routes />
        </AppProvider>
      </Switch>
    </Router>
  )
}

export default App;
