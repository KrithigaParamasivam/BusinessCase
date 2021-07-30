import React,{useState,useEffect} from 'react';
export default function Products(){
    const[res,setResult]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/products/products").then(res => res.json()).then(data=>{
          console.log(data);
          setResult(data);
          console.log(res);
        }).catch(e=>{
          console.error("ERR in view Products...");
          console.error(e);
        }).finally(()=>{
          console.log("I am in finally");
        })

    },[])
    
    return(
        <div>
          <div className="container-md ">
            <div className="col-sm-13">
            <div className="card"> 
            <div className="card-header"><h4>PRODUCT LIST</h4></div>
            <div className="card-body"> 
            <table className="table table-bordered table-light"> 
                <thead>
                    <tr className="table-dark">
                    <th scope="col">Id</th> 
                    <th scope="col">ProductId</th> 
                    <th scope="col">ProductName</th> 
                    <th scope="col">SupplierName</th> 
                    <th scope="col">Quantity</th>
                    <th scope="col">ArrivalDate</th>
                    <th scope="col">ExpiryDate</th>
                    </tr>
                </thead>
                <tbody>
              {res.map((x) => {
                return <tr>
                <td ><label key={x.id}>{x.id}</label></td>
                 <td ><label key={x.id}>{x.productId}</label></td>
                <td ><label key={x.id}>{x.productName}</label></td>
                <td ><label key={x.id}>{x.supplierName}</label></td>
                <td ><label key={x.id}>{x.quantity}</label></td>
                <td ><label key={x.id}>{x.arrivalDate}</label></td>
                <td ><label key={x.id}>{x.expiryDate}</label></td>
                </tr>
              })}
              
              </tbody>
            </table>
            
            </div>
            </div>
            </div>
            </div>
            
        </div>
    )
}