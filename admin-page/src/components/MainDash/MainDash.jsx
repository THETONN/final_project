import React from 'react';
import './MainDash.css';
import Cardnew from '../Card/cardnew';
import Chartnew from '../Table/newchard';


const MainDash = () => {
  return (
    <div>
      <div className="MainDash">
            <h1>Dashboard</h1>
            
            <div class="col">
              <Cardnew/>
            </div>
            <div class="col">
              <Chartnew/>
            </div>
              
            
            
            
          

            
      </div>
    </div>
  )
}

export default MainDash
