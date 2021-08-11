import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ViewProduct(){
    return(
        <div>
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
  

</div>
<div class="row">
  <div class="col-sm-6" style= {{marginLeft: "100px"}}>
    <div class="card text-white bg-warning mb-3">
      <div class="card-body">
        <h5 class="card-title">Damaged Product</h5>
        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
        <a href="/viewdamaged" class="btn btn-primary">view</a>
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
        <a href="/viewdeliver" class="btn btn-primary">view</a>
      </div>
    </div>
  </div>
  </div>

  <div class="row">
  <div class="col-sm-6"  style= {{marginLeft: "100px"}}>
    <div class="card text-white bg-primary mb-3">
      <div class="card-body">
        <h5 class="card-title">Pending Products</h5>
        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
        <a href="/viewpending" class="btn btn-danger">view</a>
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
