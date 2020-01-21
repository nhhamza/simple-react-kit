import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './containers/home/Home';
import About from './containers/about/About';
import Users from './containers/users/Users';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} />
    </Switch>
  </div>
);

export default App;
