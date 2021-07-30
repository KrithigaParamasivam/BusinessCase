import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
export default function Dashboard(){
    return(
        <div>
            <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/products">ProductList</Nav.Link>
          <Nav.Link href="/products/add">AddProduct</Nav.Link>
          <Nav.Link href="/edit">Edit</Nav.Link>
          <Nav.Link href="/damaged">Damaged/unDamaged products</Nav.Link>
          <Nav.Link href="/delivered">Delivered Products</Nav.Link>
          <Nav.Link href="/pending">pending delivery</Nav.Link>
          <Nav.Link href="/return">Return delivery</Nav.Link>
          
         </Nav>  
      </Navbar>
        </div>
    )
}
