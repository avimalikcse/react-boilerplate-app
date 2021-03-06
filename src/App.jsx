import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { hot } from 'react-hot-loader/root';
import HomePage from './components/hello-world';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
    <BrowserRouter>
    <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
    </BrowserRouter>
    )
  }
}

export default hot(App);
