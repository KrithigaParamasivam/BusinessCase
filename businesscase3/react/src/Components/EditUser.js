import React,{useState,useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';

export default function EditUser(){
  const hist = useHistory();
    // const [cities,setCities] = useState([]);
    
        let history = useHistory();
        const { id } = useParams();
        const [user, setUser] = useState({
         
          productId:"",
          productName: "",
          quantity: "",
          expiryDate: "",
          arrivalDate: "",
          supplierName: ""
         
        });
      
        const { productId,productName, quantity, expiryDate,arrivalDate, supplierName} = user;
        const onInputChange = e => {
          setUser({ ...user, [e.target.name]: e.target.value });
        };
      
       
      
        const onSubmit = async e => {
          e.preventDefault();
          await axios.put(`http://localhost:8080/products/update`, user);
          history.push("/");
         // alert("Updated....");
          swal({
            // title: "Good job!",
              text: "Update Sucess!",
              icon: "success",
            });
        };
      
        const loadUser = async () => {
          const result = await axios.get(`http://localhost:8080/products/product/${id}`);
          setUser(result.data);
        };
    
    return(
        <div className="container">
        <title>Student Registeration</title>
       <form onSubmit={e => onSubmit(e)}> 
       <div className="container-md ">
            <div className="col-sm-13">
            <div className="card"> 
            <div className="card-header"><h4>RECORDS</h4></div>
            <div className="card-body"> 
            <table className="table table-bordered table-light">
      
           
      <tr><td><label>ProductName</label></td>
     <td><input type="text" name="productName" value={productName} onChange={e => onInputChange(e)}/></td> 
      </tr>
      <tr >
      <td><label>SupplierName</label></td>
     <td> <input type="text" name="supplierName" value={supplierName} onChange={e => onInputChange(e)}/></td>
     </tr>
      <tr >
      <td><label>Quantity</label></td>
      <td>
      <input type="text" name="quantity" value={quantity} onChange={e => onInputChange(e)}/>
      </td>
      </tr>
      <tr >
      <td><label>ExpiryDate</label></td>
      <td>
      <input type="text" name="expiryDate" value={expiryDate} onChange={e => onInputChange(e)}/>
      </td>
      </tr>
      <tr >
      <td><label>ArrivalDate</label></td>
      <td>
      <input type="text" name="arrivalDate" value={arrivalDate} onChange={e => onInputChange(e)}/>
      </td>
      </tr>
        
            <tr>
            <button className="btn btn-primary" >UPDATE</button>
            <button className="btn btn-primary" onClick={() => hist.push("/Edit")}>BACK</button>
          {/* //  <button className="submit" onClick={() => history.push("/")}> Login </button> */}
           </tr> 
           </table>
          </div></div></div></div>
            </form>
            </div>
    )
}