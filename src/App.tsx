import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Petprofile } from './Petprofile';

class App extends Component {
  render() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" component={Petprofile} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
}

export default App;

