import { Nav, Navbar, Carousel } from 'react-bootstrap';
import image03 from './assests/image03.jpg';
import image02 from './assests/image02.jpg';
import image01 from './assests/image01.jpg';
import img7 from './assests/img7.jpg';
import img6 from './assests/img6.jpg';
import Logout from './Logout';
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

        <Navbar.Brand href="#home"></Navbar.Brand>
        <ul class="nav navbar-nav navbar-right"></ul>
        <Nav className="mr-auto">
         {/* <Nav className="me-auto"> */}
          <Nav.Link href="/">Home</Nav.Link>
          {/* <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link> */}
          {/* <Nav.Link href="/signup">Sign Up</Nav.Link> */}

          <NavDropdown title="User" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/signupform">Sign up</NavDropdown.Item>
            <NavDropdown.Item href="/Usersignin">Sign In</NavDropdown.Item>
            <NavDropdown.Item href="/userdashboard">Dashboard</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            {/* <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item> */}
          </NavDropdown>

          <NavDropdown title="Admin" id="navbarScrollingDropdown">        
            <NavDropdown.Item href="/signin">Sign In</NavDropdown.Item>
            <NavDropdown.Item href="/admindashboard">DashBoard</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            {/* <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item> */}
          </NavDropdown>   
          <Nav.Link href="/login">Login</Nav.Link>  
          {/* <Nav.Link href="/">Logout</Nav.Link> */}
          <Logout/>

        </Nav>
      </Navbar>
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        // src="holder.js/800x400?text=First slide&bg=373940"
                        // src={image03}
                        src={img7}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3> */}
                        <p>welcome to the page.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                       // src="holder.js/600x200?text=Second slide&bg=282c34"
                        // src={image02}
                        src={img6}
                        
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3> */}
                        <p>welcome to the page</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                       // src="holder.js/800x400?text=Third slide&bg=20232a"
                        src={image01}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3> */}
                       <p>welcome to the page</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


</div>
        </div>
    )
}
