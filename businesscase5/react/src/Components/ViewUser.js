import React,{useState,useEffect} from 'react';
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import {Link} from 'react-router-dom';

export default function ViewDelivered(){
    const[res,setResult]=useState([]);
    const[res1,setResult1]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/user/getuser").then(result=>{
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
          const id=e.target.id;
          const url=`http://localhost:8080/user/delete/${id}`
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
            <div className="card-header"><h4>User List</h4></div>
            <div className="card-body"> 
            <table className="table table-bordered table-light"> 
                <thead>
                    <tr className="table-dark">
                  
                    <th scope="col">Id</th> 
                    <th scope="col">First Name</th> 
                    <th scope="col">Last Name</th>   
                    <th scope="col">EmailId</th> 
                    <th></th>             
                    </tr>
                </thead>
                <tbody>
              {res.map((x) => {
                return <tr>
              
                 <td ><label key={x.id}>{x.id}</label></td>
                <td ><label key={x.id}>{x.firstname}</label></td>
                <td ><label key={x.id}>{x.lastname}</label></td>
                <td ><label key={x.id}>{x.emailid}</label></td>
                
                <td ><button key={x.id} id={x.id}  className="btn btn-primary active" onClick={handleDelete}>delete</button></td>
          
                </tr>
              })}
              
              </tbody>
            </table>
            <button className="btn btn-primary" onClick={() => hist.push("/admindashboard")}>BACK</button>
            </div>
            </div>
            </div>
            </div>
            
        </div>
    )
}