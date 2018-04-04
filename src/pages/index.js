import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './Home';
import Spot from './Spot';
import Login from './Login';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

const Routes = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/spots/:spotId" component={Spot} />
        <Route path="/signin" component={Login} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default Routes;
