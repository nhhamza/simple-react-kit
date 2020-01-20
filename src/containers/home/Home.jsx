import React from 'react';
import { Button, DatePicker } from 'antd';
import classNames from './style.scss';
import HelloWorldComponent from '../../components/helloWorld/HelloWorld.component';

const Home = () => (
  <div className={classNames}>
    <Button type="primary">PRESS ME</Button>
    <DatePicker />
    <HelloWorldComponent />
  </div>
);
export default Home;
