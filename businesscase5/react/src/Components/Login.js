//import React from 'react'
import "./sign.css"
import axios from 'axios';
import React,{useState,useEffect} from "react";
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";


export default function Signin() {
    const history = useHistory();
    const initialValues = {
        username:'',
        password:'',
    };
    const[values,setValues]=useState(initialValues);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
       
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        setErrors(validate(values))
        console.log(values);
        console.log("Submitted");    
         console.log("===" + Object.entries(errors).length)

    setSubmitted(true);
    if (Object.entries(errors).length == 0) {
      setSubmitted(true);
    } else setSubmitted(false);
       
    axios.post("http://localhost:8080/authenticate",values).then((result)=>{
          
          console.log("=============Submitted");
          console.log(result.data);
          console.log(result.data.token);
          localStorage.setItem('token',result.data.token);

          localStorage.setItem('token',result.data.token);
            localStorage.setItem('roles',result.data.roles[0]);
            if(result.data.roles[0]=="ROLE_ADMIN")
            {
              console.log('Inside admin success redirection');
              history.push('/admindashboard');
            }
            else if(result.data.roles[0]=="ROLE_USER")
            {
              console.log('Inside user success redirection');
              history.push('/userdashboard');
            }
    }
    ).catch((err)=>{
            console.log("err")
        })
    
  
        };


    const handleOnChange=(event)=>{
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
            // const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        if (!values.username) {
          errors.username = "username is required";
        } 
        

        if (!values.password) {
            errors.password = "Password is required";
          } else if (values.password.length <5){
            errors.password="min 6 characters required for password"
          }

            
        return errors;
      };  

    return (

        <div className="container">
            
             
            <div className="app-wrapper">
            {(Object.entries(errors).length==0) && submitted && <div className="success"></div>}
            <div>
            <h2 className="title">SIGN IN</h2>
            </div>
           
            <form onSubmit={handleFormSubmit} noValidate  className="form-wrapper">
            
                <div className="email">
                    <label className="label">User Name</label>
                    <input className="input" type="username" name="username" value={values.username} onChange={handleOnChange}/>
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>
                <div className="password">
                    <label className="label">Password</label>
                    <input className="input" type="password" name="password" value={values.password} onChange={handleOnChange}/>
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div >
               <button className="submit" onClick={handleFormSubmit} >Login</button>
               <button className="submit" onClick={() => history.push("/admindashboard")}> </button>
               <h1></h1>
              <button className="submit" onClick={() => history.push("/signup")}> Signup </button>
                      
                        {/* <button className="submit" > Login </button>  */}
                      {/* <button  className="btn btn-dark "onClick={() => history.push("/")}>Back</button>
                     */}
                </div>
            </form>
            </div>    


        </div>
        
    )
}
