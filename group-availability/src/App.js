import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SelectExistingGroup from './selectexistinggroup.js';
import CreateNewGroup from './createnewgroup.js';
import Group from './group.js';

import './App.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Are you free?</h1>
        <h2>Group scheduling app - figure out when everyone is available.</h2>
        <br></br>
        <br></br>
        <SelectExistingGroup />
        <br></br>
        <br></br>
        <CreateNewGroup />
        <br></br>
        <br></br>
        <h6>Benjamin Palmer</h6>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Home}/>
          <Route path="/group/:groupid" component={Group}/>
        </div>
      </Router>
    );
  }
}

export default App;