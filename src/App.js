import React from 'react';
import AppContextProvider from './context/AppContextProvider';
import { Route, Router } from 'react-router';
import SearchScreen from './components/SearchScreen';
import { createBrowserHistory } from "history";
import { GlobalStyle } from './Global';
import './App.css';

const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
    <AppContextProvider>
        <div className="app">
          <Route exact path="/:page?" component={SearchScreen} />
        </div>
        <GlobalStyle />
      </AppContextProvider>
    </Router>
  );
}

export default App;
