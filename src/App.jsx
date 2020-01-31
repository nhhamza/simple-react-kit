import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/layout/header/Header.jsx';
import Footer from './components/layout/footer/Footer.jsx';
import Home from './containers/home/Home';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
    <Footer />
  </>
);

export default App;
