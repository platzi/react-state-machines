import React from 'react';
import { Welcome } from '../Components/Welcome';
import { Search } from '../Components/Search';
import { Passengers } from '../Components/Passengers';
import { Tickets } from '../Components/Tickets';
import './StepsLayout.css';

export const StepsLayout = ({ state, send }) => {
  const renderContent = () => {
    return <Welcome />;
  };

  return (
    <div className='StepsLayout'>
      {renderContent()}
    </div>
  );
}; 