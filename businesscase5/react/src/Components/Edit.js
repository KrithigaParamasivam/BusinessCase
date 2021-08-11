import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import "./Navbar1.css"
import swal from 'sweetalert';
import {useHistory } from "react-router-dom";

export default function Edit(){
    const[res,setResult]=useState([]);
    const[res1,setResult1]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/products/products").then(res => res.json()).then(data=>{
          console.log(data);
          setResult(data);
        }).catch(e=>{
          console.error("ERR in Student...");
          console.error(e);
        }).finally(()=>{
          console.log("I am in finally");
        })
    },[res1])

    const hist = useHistory();

  //   useEffect(()=>{
  //     fetch("http://localhost:8080/products/products").then(res => res.json()).then(data=>{
  //       console.log(data);
  //       setResult(data);
  //     }).catch(e=>{
  //       console.error("ERR in view Products...");
  //       console.error(e);
  //     }).finally(()=>{
  //       console.log("I am in finally");
  //     })

  // },[])
    const handleDelete=(e)=>{
      e.preventDefault();
        const id=e.target.id;
        const url=`http://localhost:8080/products/delete/${id}`
        axios.delete(url)
        .then(res1 => {
          console.log(res1);
          setResult1(res1.data);
          console.log(res1.data);
          swal({
            // title: "Good job!",
              text: "product deleted successfully!",
              icon: "success",
            });
        })
    }
    
    return(
        <div>  
          <div className="container-md ">
            <div className="col-sm-13">
            <div className="card"> 
            <div className="card-header"><h4></h4></div>
            <div className="card-body"> 
            <table className="table table-bordered table-light"> 
            <thead>
                    <tr className="table-dark">
                    <th scope="col">Id</th> 
                    <th scope="col">ProductId</th> 
                    <th scope="col">ProductName</th> 
                    <th scope="col">SupplierName</th> 
                   
                    <th scope="col">Quantity</th>
                    
                    <th scope="col">ExpiryDate</th>
                    
                    <th scope="col">ArrivalDate</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>  
          <tbody>
            {res.map((x) => {
                return <tr >
                   <td ><label key={x.id}>{x.id}</label></td>
                   <td ><label key={x.id}>{x.productId}</label></td>
                  <td ><label key={x.id}>{x.productName}</label></td>
                <td ><label key={x.id}>{x.supplierName}</label></td>
                <td ><label key={x.id}>{x.quantity}</label></td>
                <td ><label key={x.id} >{x.expiryDate}</label></td>
                <td ><label key={x.id} >{x.arrivalDate}</label></td>
                <td ><Link  id={x.id}  to={`/edit/edituser/${x.id}`} className="btn btn-primary active">edit</Link></td>
                <td ><button key={x.id} id={x.id}  className="btn btn-primary active" onClick={handleDelete}>delete</button></td>
          
                </tr>
              })}
              </tbody> 
            </table>
            <button className="btn btn-primary" onClick={() => hist.push("/userdashboard")}>BACK</button>
            </div>
            </div>
            </div>
            </div> 
        </div>
    )
}