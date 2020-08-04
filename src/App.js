import React from 'react';
import {Router} from 'react-router-dom';
import Routes from "./Routes/index"
import history from './Service/history'

function App() {
  return (
  <Router history={history}>
    <Routes/>
  </Router>
  );
}

export default App;
