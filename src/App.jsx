import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';

import Home from './containers/Home';
import About from './containers/About';
import Users from './containers/Users';
import 'antd/dist/antd.css';
import './styles/main.scss';
import 'antd/es/button/style/index.css';
import 'antd/es/select/style/index.css';
import 'antd/es/cascader/style/index.css';
import classNames from './styles/aplication.scss';

const App = () => (
  <div className={classNames.container}>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} />
    </Switch>
  </div>
);

export default App;
