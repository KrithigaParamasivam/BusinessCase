import React, { useState } from 'react';
import axios from 'axios';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert';
import {useHistory } from "react-router-dom";

export default function DeliveredProducts() {

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const validationSchema = Yup.object({
    productId : Yup.number().required("Product is mandatory"),
    productName : Yup.string().required("product Name is mandatory"),
    supplierName : Yup.string().required("Supplier Name is mandatory"),
    quantity: Yup.number().required("Qunantity is mandatory"),
    description: Yup.string().required("Description is mandatory"),
    customerId: Yup.number().required("Qunantity is mandatory"),
    customerOrderid: Yup.number().required("Qunantity is mandatory"),
    customerName: Yup.string().required("Customer Name is mandatory"),
    customerAddress: Yup.string().required("Customer Address is mandatory"),
    customerPhoneno: Yup.string().matches(phoneRegExp,"Phone number is invalid")
    .min(10," phone number should be minimum 10 numbers")
    .max(10," phone number should be maximum 10 numbers"),
        // //expiryDate : Yup.string().required("expiryDate is mandatory"),
    arrivedDate : Yup.string().required("arrivedDate is mandatory"),
    deliveredDate: Yup.string().required("Description is mandatory"),
    deliveryDate: Yup.string().required("Description is mandatory"),
    status: Yup.string().required("Description is mandatory")
    
}) 
const hist = useHistory();
const { handleSubmit,handleChange,values,errors} = useFormik({

 
  initialValues: {
    productId:'',
    productName:'',
    supplierName:'',
    description:'',
    quantity:'',
    customeId:'',
    customerOrderid:'',
    customerName:'',
    customerAddress:'',
    customerPhoneno:'',
    // // expiryDate: '',
    arrivedDate:'',
    deliveryDate:'',
    delivereddate:'',
    status:''
  },
  validationSchema,
  onSubmit(values) {
    axios.post("http://localhost:8080/deliver/adddeliver",values).then(res=>res.data).then((data)=>{
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
}
}) 
 
    return (
        <div>           
            <div className="container-md ">
            <div className="col-sm-13">
            <div className="card"> 
            <div className="card-header"><h4>ADD DELIVERED PRODUCTS</h4></div>
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
    <div class="col-md-6 mb-3">
      <label for="validationDefault03">Quantity</label>
      <input type="text" class="form-control" id="validationDefault03" name="quantity" value={values.quantity} onChange={handleChange} />
      {errors.quantity ? errors.quantity : null}
    </div>

  
    <div class="col-md-4 mb-3">
      <label for="validationDefault05">Description</label>
      <input type="text" class="form-control" id="validationDefault05" name="description" value={values.description} onChange={handleChange} />
      {errors.description ? errors.description : null}
    </div>
    

    {/* <div class="col-md-3 mb-3">
      <label for="validationDefault04">Expiry Date</label>
      <input type="text" class="form-control" id="validationDefault04" name="expiryDate" value={values.expiryDate} onChange={handleChange}  />
      {errors.expiryDate ? errors.expiryDate : null}
    </div> */}
   
    <div class="col-md-6 mb-3">
      <label for="validationDefault03">Customer Id</label>
      <input type="text" class="form-control" id="validationDefault03" name="customerId" value={values.customerId} onChange={handleChange} />
      {errors.customerId ? errors.customerId : null}
    </div> 
 
    <div class="col-md-6 mb-3">
      <label for="validationDefault03">Customer Order Id</label>
      <input type="text" class="form-control" id="validationDefault03" name="customerOrderid" value={values.customerOrderid} onChange={handleChange} />
      {errors.customerOrderid ? errors.customerOrderid : null}
    </div>

     <div class="col-md-6 mb-3">
      <label for="validationDefault03">Customer Name</label>
      <input type="text" class="form-control" id="validationDefault03" name="customerName" value={values.customerName} onChange={handleChange} />
      {errors.customerName ? errors.customerName : null}
    </div>

    <div class="col-md-6 mb-3">
      <label for="validationDefault03">Customer Address</label>
      <input type="text" class="form-control" id="validationDefault03" name="customerAddress" value={values.customerAddress} onChange={handleChange} />
      {errors.customerAddress ? errors.customerAddress : null}
    </div>

    
    <div class="col-md-6 mb-3">
      <label for="validationDefault10">Customer PhoneNumber</label>
      <input type="text" class="form-control" id="validationDefault10" name="customerPhoneno" value={values.customerPhoneno} onChange={handleChange} />
      {errors.customerPhoneno ? errors.customerPhoneno : null}
    </div>
    
    <div class="col-md-4 mb-3">
      <label for="validationDefault05">Arrived Date</label>
      <input type="text" class="form-control" id="validationDefault05" name="arrivedDate" value={values.arrivedDate} onChange={handleChange} />
      {errors.arrivedDate ? errors.arrivedDate : null}
    </div>

    <div class="col-md-4 mb-3">
      <label for="validationDefault05">Delivered Date</label>
      <input type="text" class="form-control" id="validationDefault05" name="deliveredDate" value={values.deliveredDate} onChange={handleChange} />
      {errors.deliveredDate ? errors.deliveredDate : null}
    </div>
   

    <div class="col-md-4 mb-3">
      <label for="validationDefault05">Delivery Date</label>
      <input type="text" class="form-control" id="validationDefault05" name="deliveryDate" value={values.deliveryDate} onChange={handleChange} />
      {errors.deliveryDate ? errors.deliveryDate : null}
    </div>
   
    <div class="col-md-4 mb-3">
      <label for="validationDefault05">Status</label>
      <input type="text" class="form-control" id="validationDefault05" name="status" value={values.status} onChange={handleChange} />
      {errors.status ? errors.status : null}
    </div> 

  </div>
  {/* <button class="btn btn-primary" type="submit" onClick={handleSubmit} >Add</button> */}
  <button class="btn btn-primary" type="submit" >ADD</button>
  <button className="btn btn-primary" onClick={() => hist.push("/userdashboard")}>BACK</button>
  
</form>
        </div></div></div></div>
        
)}