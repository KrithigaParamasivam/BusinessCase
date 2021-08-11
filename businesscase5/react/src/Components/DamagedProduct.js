import React, { useState } from 'react';
import axios from 'axios';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert';
import {useHistory } from "react-router-dom";

export default function DamagedProduct() {
  const validationSchema = Yup.object({
    productId : Yup.number().required("Product is mandatory"),
    productName : Yup.string().required("productName is mandatory"),
    supplierName : Yup.string().required("SupplierName is mandatory"),
    //quantity:Yup.number().required("Qunantity is mandatory"),
    description:Yup.string().required("Description is mandatory"),
    //description:Yup.string().required("Description is mandatory"),
    //expiryDate : Yup.string().required("expiryDate is mandatory"),
    arrivedDate : Yup.string().required("arrivedDate is mandatory")
    
}) 
const hist = useHistory();
const { handleSubmit,handleChange,values,errors} = useFormik({

 
  initialValues: {
    productId:'',
    productName:'',
    supplierName:'',
    description:'',
    // quantity:'',
    // expiryDate: '',
    arrivedDate:''
  },
  validationSchema,
  onSubmit(values) {
    axios.post("http://localhost:8080/damage/adddamage",values).then(res=>res.data).then((data)=>{
          //alert("User Onboarded successfully");
          console.log("=============Submitted");
          console.log(data);
          swal({
            // title: "Good job!",
              text: "product added successfully!",
              icon: "success",
            });
    }
    ).catch((err)=>{
            console.log("err")
        })


        axios.put("http://localhost:8080/damage/update",values).then(res=>res.data).then((data)=>{
          //alert("User Onboarded successfully");
          console.log("=============Submitted");
          console.log(data);
          swal({
            // title: "Good job!",
              text: "product updated successfully!",
              icon: "success",
            });
    }
    ).catch((err)=>{
            console.log("err")
        })
}
}) 
 
    return (
        <div>           
            <div className="container-md ">
            <div className="col-sm-13">
            <div className="card"> 
            <div className="card-header"><h4>ADD DAMAGED PRODUCTS</h4></div>
            <form onSubmit={handleSubmit} noValidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationDefault01">Product Id</label>
      <input type="text" class="form-control" id="validationDefault01" name="productId" value={values.productId} onChange={handleChange} />
      {errors.productId ? errors.firstname : null}
    </div>

    <div class="col-md-4 mb-3">
      <label for="validationDefault02">Product name</label>
      <input type="text" class="form-control" id="validationDefault02" name="productName" value={values.productName} onChange={handleChange} />
      {errors.productName ? errors.productName : null}
    </div>

    <div class="col-md-4 mb-3">
      <label for="validationDefaultUsername">Supplier name</label>
      <div class="input-group">
        <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" name="supplierName" value={values.SupplierName} onChange={handleChange} />
        {errors.supplierName ? errors.supplierName : null}
      </div>
    </div>
  </div>

  <div class="form-row">
    {/* <div class="col-md-6 mb-3">
      <label for="validationDefault03">Quantity</label>
      <input type="text" class="form-control" id="validationDefault03" name="quantity" value={values.quantity} onChange={handleChange} />
      {errors.quantity ? errors.quantity : null}
    </div>

    <div class="col-md-3 mb-3">
      <label for="validationDefault04">Expiry Date</label>
      <input type="text" class="form-control" id="validationDefault04" name="expiryDate" value={values.expiryDate} onChange={handleChange}  />
      {errors.expiryDate ? errors.expiryDate : null}
    </div> */}

    <div class="col-md-4 mb-3">
      <label for="validationDefault05">Arrived Date</label>
      <input type="text" class="form-control" id="validationDefault05" name="arrivedDate" value={values.arrivedDate} onChange={handleChange} />
      {errors.arrivedDate ? errors.arrivedDate : null}
    </div>

    <div class="col-md-4 mb-3">
      <label for="validationDefault05">Description</label>
      <input type="text" class="form-control" id="validationDefault05" name="description" value={values.description} onChange={handleChange} />
      {errors.description ? errors.description : null}
    </div>

  </div>
  {/* <button class="btn btn-primary" type="submit" onClick={handleSubmit} >Add</button> */}
  <button class="btn btn-primary" type="submit" >ADD</button>
  <h1></h1>
  <button class="btn btn-primary" type="submit" >Update</button>
  <h2></h2>
  <button className="btn btn-primary" onClick={() => hist.push("/userdashboard")}>BACK</button>
  
</form>
        </div></div></div></div>
        
)}