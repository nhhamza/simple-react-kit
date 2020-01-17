import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';

import Home from './containers/Home';
import About from './containers/About';
import Users from './containers/Users';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} />
    </Switch>
  </>
);

export default App;
