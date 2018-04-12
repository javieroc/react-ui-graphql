import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './Home';
import Place from './Place';
import Login from './Login';
import Register from './Register';
import Nav from '../components/Nav/Nav';

const Routes = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/places/:placeId" component={Place} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Register} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
