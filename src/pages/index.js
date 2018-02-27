import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './Home';
import Spot from './Spot';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

const Routes = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/spots/:spotId" component={Spot} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default Routes;
