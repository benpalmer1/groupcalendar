import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Group from './Group';
import Home from './Home'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home}/>
        <Route path="/group/:groupid" component={Group}/>
      </div>
    </Router>
  );
}

export default App;