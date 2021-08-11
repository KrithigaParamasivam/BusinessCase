import { Nav, Navbar, Carousel } from 'react-bootstrap';
import image03 from './assests/image03.jpg';
import image02 from './assests/image02.jpg';
import image01 from './assests/image01.jpg';
import {NavDropdown } from 'react-bootstrap';
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar1.css';
import { IconContext } from 'react-icons';
import "./sign.css"


export default function Home() {
    const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
    return (
      <div>
        <Navbar bg="danger" variant="dark">
        <>
          <IconContext.Provider value={{ color: '#fff' }}>
            <div className='navbar'>
              <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                  <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li>
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </IconContext.Provider>
        </>
      </Navbar>



        
        </div>
    )
}
