import React from 'react';
import { Button, DatePicker } from 'antd';
import classNames from './style.scss';

const Home = () => (
  <div className={classNames}>
    <Button type="primary">PRESS ME</Button>
    <DatePicker />
  </div>
);
export default Home;
