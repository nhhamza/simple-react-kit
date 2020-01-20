import React from 'react';
import classNames from './style.scss';
import HelloWorldComponent from '../../components/helloWorld/HelloWorld.component';

const Home = () => (
  <div className={classNames}>
    <HelloWorldComponent />
  </div>
);
export default Home;
