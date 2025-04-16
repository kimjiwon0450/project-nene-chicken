import React from 'react';
import ChickenNavBar from './ChickenNavBar';
import ChickenFooter from './ChickenFooter';
import { Outlet } from 'react-router';

const Rootlayout = () => {
  return (
    <div>
      <ChickenNavBar />
      <Outlet />
      <ChickenFooter />
    </div>
  );
};

export default Rootlayout;
