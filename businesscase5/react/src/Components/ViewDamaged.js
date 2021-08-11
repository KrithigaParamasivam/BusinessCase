import React,{useState,useEffect} from 'react';
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import {Link} from 'react-router-dom';

export default function Products(){
    const[res,setResult]=useState([]);
    const[res1,setResult1]=useState([]);
    
    useEffect(()=>{
        axios.get("http://localhost:8080/damage/getdamage").then(result=>{
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
          const url=`http://localhost:8080/damage/delete/${productId}`
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
            <div className="card-header"><h4>DAMAGED PRODUCT LIST</h4></div>
            <div className="card-body"> 
            <table className="table table-bordered table-light"> 
                <thead>
                    <tr className="table-dark">
                    <th scope="col">Id</th> 
                    <th scope="col">ProductId</th> 
                    <th scope="col">ProductName</th> 
                    <th scope="col">SupplierName</th>   
                    <th scope="col">Arrived Date</th>   
                    <th></th>                
                    </tr>
                </thead>
                <tbody>
              {res.map((x) => {
                return <tr>
                <td ><label key={x.productId}>{x.id}</label></td>
                 <td ><label key={x.productId}>{x.productId}</label></td>
                <td ><label key={x.productId}>{x.productName}</label></td>
                <td ><label key={x.productId}>{x.supplierName}</label></td>
                <td ><label key={x.productId}>{x.arrivedDate}</label></td>
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