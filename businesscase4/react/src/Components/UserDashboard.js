import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Carousel } from 'react-bootstrap';
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import img1 from './assests/img1.jpg';
import img5 from './assests/img5.jpg';
import image02 from './assests/image02.jpg';
import image01 from './assests/image01.jpg';
import { SidebarData } from './SidebarData';
import './Navbar1.css';
import { IconContext } from 'react-icons';
import "./sign.css"
import "./userdashboard.css"

export default function UserDashboard(){
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

    return(
        <div>
            {/* <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/products">ProductList</Nav.Link>
          <Nav.Link href="/products/add">AddProduct</Nav.Link>
          <Nav.Link href="/edit">Edit</Nav.Link>
          <Nav.Link href="/damaged">Damagedproducts</Nav.Link>
          <Nav.Link href="/delivered">Delivered Products</Nav.Link>
          <Nav.Link href="/pendingdelivery">pending delivery</Nav.Link>
          <Nav.Link href="/return">Return delivery</Nav.Link>    
         </Nav>  
      </Navbar> */}

<Navbar bg="danger"   variant="dark">
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

              
<br></br>
<div><h1></h1>
<h2>

</h2>
<h3>
  </h3></div>
      <div class="img"></div>
      <div class="container-sm row row-cols-1 row row-cols-md-3 " style= {{marginLeft: "100px"}}>
   
 
  <h1>USER DASHBOARD</h1>
  {/* <img src="img5.jpg" alt="" width="900" height="400"></img> */}
  <div class="row">
   <div class="col-sm-7"  style= {{marginLeft: "300px"}}>
    <div class="card text-white bg-primary mb-3">
      <div class="card-body">
        <h5 class="card-title">Manage Products</h5>
        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
        <a href="/manageproducts" class="btn btn-danger">Add</a>
      </div>
    </div>
  </div>
 

 
   <div class="col-sm-7"  style= {{marginLeft: "300px"}}>
     <div class="card text-white bg-primary mb-3">
       <div class="card-body">
         <h5 class="card-title">View Products</h5>
         {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
         <a href="/viewproduct" class="btn btn-danger">View</a>
       </div>
     </div>
   </div> 

   <div class="col-sm-7"  style= {{marginLeft: "300px"}}>
     <div class="card text-white bg-primary mb-3">
       <div class="card-body">
         {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
         <a href="/" class="btn btn-danger">Back</a>
       </div>
     </div>
   </div>
      </div>
        </div>
        </div>
       
        
    
        

        
    )
}
