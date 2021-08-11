import React from 'react'
import Navibarcomp from './Components/Navibarcomp.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home.js'
import About from './Components/About.js'
import Contact from './Components/Contact.js'
import SignupForm from './Components/SignupForm.js'
import Signin from './Components/Signin.js'
import Admin from './Components/Admin.js'
import Login from './Components/Login.js'
import Dashboard from './Components/AdminDashboard.js'
import Navbars1 from './Components/Navbars1.js'
import Products from './Components/Products.js'
import AddProduct from './Components/AddProduct.js'
import Usersignin from './Components/Usersignin.js'
import UserDashboard from './Components/UserDashboard.js'
import AdminDashboard from './Components/AdminDashboard.js'
import EditUser from './Components/EditUser'
import Edit from './Components/Edit'
import Support from './Components/Support'
import ReturnDelivery from './Components/ReturnDelivery'
import PendingDelivery from './Components/PendingDelivery'
import DamagedProduct from './Components/DamagedProduct'
import DeliveredProducts from './Components/DeliveredProducts'
import UndamagedProducts from './Components/UndamagedProducts'
import ManageProducts from './Components/ManageProducts'
import ViewProduct from './Components/ViewProduct'
import ViewDamaged from './Components/ViewDamaged'
import ViewPending from './Components/ViewPending'
import ViewDelivered from './Components/ViewDelivered'
import ViewUser from './Components/ViewUser'
import ManageUser from './Components/ManageUser'
import RoleBasedRouting from './Components/RoleBaseRouting'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useMediaQuery } from "@material-ui/core";

export default function App() {
  const rey=useMediaQuery("(max-width:400px)");
  const media=useMediaQuery("(max-width:1000px)");
  return (
    <div className="App">
    <Router>
     {/* <Navibarcomp /> */}

    
        {/* <Signup /> */}
        {/* <Navbars1/> */}
     <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/about' exact component={About}/>
       <Route path='/contact' exact component={Contact}/>
       <Route path='/signupform' exact component={SignupForm}/>
       <Route path='/signin' exact component={Signin}/>
       <Route path='/admin' exact component={Admin}/>
       <Route path='/logout' exact component={Home}/>
       <Route path='/login' exact component={Login}/>
       <Route path='/products' exact component={Products}/>
      {/* // <Route path='/dashboard' exact component={Dashboard}/> */}
       <Route path='/products/add' exact component={AddProduct}/>
       {/* <Route path='/admindashboard' exact component={AdminDashboard}/> */}
       <Route path='/usersignin' exact component={Usersignin}/>
       {/* <Route path='/userdashboard' exact component={Usersignin}/> */} 
       <Route path='/userdashboard' exact component={UserDashboard}/>
       <Route path='/edit' exact component={Edit} />
       <Route path='/edit/edituser/:id' component={EditUser} />
       <Route path='/support' exact component={Support} />
       <Route path='/damaged' exact component={DamagedProduct} />
       <Route path='/pendingdelivery' exact component={PendingDelivery} />
       <Route path='/return' exact component={ReturnDelivery} />
       <Route path='/delivered' exact component={DeliveredProducts} />
       <Route path='/undamaged' exact component={UndamagedProducts} />
       <Route path='/manageproducts' exact component={ManageProducts} />
       <Route path='/viewdamaged' exact component={ViewDamaged} />
       <Route path='/viewproduct' exact component={ViewProduct} />
       <Route path='/viewpending' exact component={ViewPending} />
       <Route path='/viewdeliver' exact component={ViewDelivered} />
       <Route path='/viewuser' exact component={ViewUser} />
       <Route path='/manageuser' exact component={ManageUser} />
       
       <RoleBasedRouting exact path="/admindashboard" component={AdminDashboard} roles={['ROLE_ADMIN']} />
       {/* <Route path='/viewproducts' exact component={ViewProducts} /> */}
     
     </Switch>
   </Router>
   {rey && <div style={{backgroundColor:"grey",textAlign:"center"}}>Screen Switched to mobile version</div>}
   {rey && <div style={{backgroundColor:"black",textAlign:"center"}}>Screen Switched to mobile version</div>}
   </div>
   
  )
}
