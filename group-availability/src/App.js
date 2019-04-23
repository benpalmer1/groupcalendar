import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SelectExistingTeam from './selectexistingteam.js';
import CreateNewTeam from './createnewteam.js';
import Team from './team.js';

import './App.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Are you free?</h1>
        <h2>Group scheduling app - figure out when your team is available.</h2>
        <br></br>
        <br></br>
        <SelectExistingTeam />
        <br></br>
        <br></br>
        <CreateNewTeam />
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
          <Route path="/team/:teamid" component={Team}/>
        </div>
      </Router>
    );
  }
}

export default App;