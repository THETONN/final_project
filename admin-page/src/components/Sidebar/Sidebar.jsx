
import React, { useState } from 'react';
import Logo from '../../imgs/logo.png';
import './Sidebar.css';
import { SidebarData } from '../../Data/Data';
import {UilSignOutAlt,UilBars} from "@iconscout/react-unicons";
import {motion} from 'framer-motion'
import { Link, NavLink } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';


const Sidebar = () => {
    const [selected, setSelected] = useState(0);
  
    const [expanded, setExpaned] = useState(false)
    
  
    const sidebarVariants = {
      true: {
        left : '0'
      },
      false:{
        left : '-60%'
      }
    }
    console.log(window.innerWidth)
    return (
      <>
        <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
          <UilBars />
        </div>
      <motion.div className='sidebar'
      variants={sidebarVariants}
      animate={window.innerWidth<=768?`${expanded}`:''}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            {/* Sh<span>o</span>ps */}
          </span>
        </div>
  
        <div className="menu">
          
          {SidebarData.map((item, index) => {
            return (
              
              <NavLink to={item.Link}
                className={selected === index ? "menuItem" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                  <item.icon /> 
                  <span>{item.heading}</span>
                 
                
              </NavLink>
            );
          })}

          {/* <UilSignOutAlt className='SignOut'/> */}
          <div className="menuItem">
          </div>
        </div>
      </motion.div>
      </>
    );
  };

export default Sidebar
