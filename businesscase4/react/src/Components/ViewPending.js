import React,{useState,useEffect} from 'react';
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import {Link} from 'react-router-dom';

export default function Products(){
    const[res,setResult]=useState([]);
    const[res1,setResult1]=useState([]);
    useEffect(()=>{
      axios.get("http://localhost:8080/getpending").then(result=>{
          setResult(result.data);
          console.log(result.data);
        }).catch(e=>{
          console.error("ERR in view Products...");
          console.error(e);
        }).finally(()=>{
          console.log("I am in finally");
        })

    },[])


    const handleDelete=(e)=>{
        e.preventDefault();
          const productId=e.target.id;
          const url=`http://localhost:8080/delete/${productId}`
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

    const hist = useHistory();

// let history = useHistory();

const { id } = useParams();
console.log(id);
    
    return(
        <div>
          <div className="container-md ">
            <div className="col-sm-13">
            <div className="card"> 
            <div className="card-header"><h4>PENDING PRODUCT LIST</h4></div>
            <div className="card-body"> 
            <table className="table table-bordered table-light"> 
                <thead>
                    <tr className="table-dark">
                  
                    <th scope="col">Product Id</th> 
                    <th scope="col">Product Name</th> 
                    <th scope="col">Supplier Name</th>   
                    <th scope="col">Descriptiion</th>  
                    <th scope="col">Quantity</th>  
                    <th scope="col">Customer Id</th>  
                    <th scope="col">Customer OrderId</th> 
                    <th scope="col">Customer Name</th>   
                    <th scope="col">Arrived Date</th>  
                    <th scope="col">Delivery Date</th>  
                    <th scope="col">Status</th>   
                    <th></th>             
                    </tr>
                </thead>
                <tbody>
              {res.map((x) => {
                return <tr>
              
                 <td ><label key={x.productId}>{x.productId}</label></td>
                <td ><label key={x.productId}>{x.productName}</label></td>
                <td ><label key={x.productId}>{x.supplierName}</label></td>
                <td ><label key={x.productID}>{x.description}</label></td>
                <td ><label key={x.productId}>{x.quantity}</label></td>
                <td ><label key={x.productID}>{x.customerId}</label></td>
                <td ><label key={x.productID}>{x.customerOrderid}</label></td>
                <td ><label key={x.productID}>{x.customerName}</label></td>
                <td ><label key={x.productId}>{x.arrivedDate}</label></td>
                <td ><label key={x.productId}>{x.deliveryDate}</label></td>
                <td ><label key={x.productId}>{x.status}</label></td>
                <td ><button key={x.productId} id={x.productId}  className="btn btn-primary active" onClick={handleDelete}>delete</button></td>
          
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