import React from 'react';
import './MainDash.css';
import Cardnew from '../Card/cardnew';
import Chartnew from '../Table/newchard';

const MainDash = () => {
  return (
    <div className="main-dash">
      
      <div className="dashboard-grid">
        <div className="sidebar">
          <h1>Dashboard</h1>
          {/* Sidebar content here */}
        </div>
        <div className="main-content">
          <Cardnew />
          <Chartnew />
        </div>
      </div>
    </div>
  )
}

export default MainDash;
