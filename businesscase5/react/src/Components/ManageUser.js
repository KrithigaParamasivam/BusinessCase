//import React from 'react'
import "./sign.css"
import axios from 'axios'
import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import { useParams,useHistory } from "react-router-dom";


export default function ManageUser() {

    const hist = useHistory();
    const initialValues = {
        firstname:'',
        lastname:'',
        emailid: '',
        password: '',
        confirmpassword:''
    };
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validate(values))
        console.log(values);
        console.log("Submitted");
        console.log("===" + Object.entries(errors).length)
        setSubmitted(true);
        swal({
            // title: "Good job!",
             text: "User added successfully!",
             icon: "success",
           });



        console.log("===" + Object.entries(errors).length)

        setSubmitted(true);
        if (Object.entries(errors).length == 0) {
            setSubmitted(true);
        } else setSubmitted(false);

        // props.onUserAdd(formValues);
        axios.post("http://localhost:8080/user/adduser",values).then(res => {
            console.log("saved");
          
            
          }).catch(e=>{
            console.error("ERR in save data");
            console.error(e);
          }).finally(()=>{
            console.log("I am in finally");
          })


          axios.put("http://localhost:8080/user/update",values).then(res=>res.data).then((data)=>{
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
          
      

    };

    const handleOnChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const validate = (values) => {
        let errors = {};
        console.log(values);

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        // const reg= ^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,9})
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        if (!values.emailid) {
            errors.emailid = "Email is required";
        } else if (!regex.test(values.emailid)) {
            errors.emailid = "invalid EmailId";
        }

        // if (!values.password) {
        //     errors.password = "Password is required";
        // } else if (values.password.length < 5) {
        //     errors.password = "min 6 characters required for password"
        // }

        
        if (!values.password) {
            errors.password = "Password is required";
        } else if (!strongRegex.test(values.password)){
            errors.password="required atleast one lowercase,uppercase,specialcharacter,min-6,max-20";
        } 

        if (!values.confirmpassword) {
            errors.confirmpassword = "confirmPassword is required";
        } else if (values.confirmpassword!=values.password) {
            errors.confirmpassword = "password & confirmpassword not matches"
        }

        if (!values.firstname) 
            errors.firstname = "Firstname is required";

        if (!values.lastname) 
            errors.lastname = "Lastname is required";
       

        return errors;
    };

    return (

        <div className="container">


            <div className="app-wrapper">
                {(Object.entries(errors).length == 0) && submitted && <div className="success"> Account created successfully </div>}
                <div>
                    <h2 className="title">Add User</h2>
                </div>

                <form onSubmit={handleFormSubmit} noValidate className="form-wrapper">

                    <div className="firstname">
                        <label className="label">FirstName</label>
                        <input className="input" type="firstname" name="firstname" value={values.firstname} onChange={handleOnChange} />
                        {errors.firstname && <p className="error">{errors.firstname}</p>}
                    </div>

                    <div className="lastname">
                        <label className="label">LastName</label>
                        <input className="input" type="lastname" name="lastname" value={values.lastname} onChange={handleOnChange} />
                        {errors.lastname && <p className="error">{errors.lastname}</p>}
                    </div>

                    <div className="email">
                        <label className="label">Email id</label>
                        <input className="input" type="emailid" name="emailid" value={values.emailid} onChange={handleOnChange} />
                        {errors.emailid && <p className="error">{errors.emailid}</p>}
                    </div>
                    <div className="password">
                        <label className="label">Password</label>
                        <input className="input" type="password" name="password" value={values.password} onChange={handleOnChange} />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div className="confirmpassword">
                        <label className="label">ConfirmPassword</label>
                        <input className="input" type="password" name="confirmpassword" value={values.confirmpassword} onChange={handleOnChange} />
                        {errors.confirmpassword && <p className="error">{errors.confirmpassword}</p>}
                    </div>
                    <div >
                         <button className="submit" onClick={handleFormSubmit}>
                             Add 
                         </button>
                         <button className="submit" onClick={handleFormSubmit}>
                             Update 
                         </button>
                         <button className="submit" onClick={() => hist.push("/admindashboard")}>BACK</button>
                        {/* <button className="submit">SIGN UP</button> */}

                    </div>
                </form>
            </div>


        </div>

    )
}
