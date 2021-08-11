import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ManageProducts(){
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

<br></br>
<div><h1></h1>
<h2>
</h2></div>

      <div class="container-sm row row-cols-1 row row-cols-md-3 " style= {{marginLeft: "100px"}}>
      <div class="row">
  <div class="col-sm-6" style= {{marginLeft: "100px"}}>
    <div class="card text-white bg-danger mb-3">
      <div class="card-body">
        <h5 class="card-title">Product List</h5>
        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
        <a href="/products" class="btn btn-primary">View </a>
      </div>
    </div>
  </div>
  <div class="col-sm-6"  style= {{marginLeft: "100px"}} >
    <div class="card text-white bg-warning mb-3">
      <div class="card-body">
        <h5 class="card-title">Add product</h5>
        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
        <a href="/products/add" class="btn btn-primary">Add</a>
      </div>
    </div>
  </div>
</div>
<br/>
<div class="row">
  <div class="col-sm-6" style= {{marginLeft: "100px"}}>
    <div class="card text-white bg-primary mb-3">
      <div class="card-body">
        <h5 class="card-title">Update Product</h5>
        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
        <a href="/edit" class="btn btn-danger">Update</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6"  style= {{marginLeft: "100px"}}>
    <div class="card text-white bg-success mb-3">
      <div class="card-body">
        <h5 class="card-title">Edit Products</h5>
        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
        <a href="/edit" class="btn btn-primary">Edit</a>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-6" style= {{marginLeft: "100px"}}>
    <div class="card text-white bg-warning mb-3">
      <div class="card-body">
        <h5 class="card-title">Damaged Product</h5>
        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
        <a href="/damaged" class="btn btn-primary">Add</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6" style= {{marginLeft: "100px"}}>
    <div class="card text-white bg-danger mb-3">
      <div class="card-body">
        <h5 class="card-title">Undamaged Product</h5>
        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
        <a href="/undamaged" class="btn btn-primary">Add</a>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-6"  style= {{marginLeft: "100px"}}>
    <div class="card text-white  bg-success mb-3">
      <div class="card-body">
        <h5 class="card-title">Delivered Products</h5>
        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
        <a href="/delivered" class="btn btn-primary">Add</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6"  style= {{marginLeft: "100px"}}>
    <div class="card text-white bg-primary mb-3">
      <div class="card-body">
        <h5 class="card-title">Pending Products</h5>
        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
        <a href="/pendingdelivery" class="btn btn-danger">Add</a>
      </div>
    </div>
  </div>

</div>
<div class="row">
  <div class="col-sm-6"  style= {{marginLeft: "100px"}}>
    <div class="card text-white  bg-danger mb-3">
      <div class="card-body">
        {/* <h5 class="card-title">Back</h5> */}
        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
        <a href="/userdashboard" class="btn btn-primary">Back</a>
      </div>
    </div>
  </div>
  </div>



   



      </div>
        </div>
        

        

        
    )
}
