import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/layout/header/Header.jsx';
import Footer from './components/layout/footer/Footer.jsx';
import Home from './containers/home/Home';
import NewVisual from './containers/newVisual/NewVisual.jsx';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/new-visual" component={NewVisual} />
    </Switch>
    <Footer />
  </div>
);

export default App;
