import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route} from 'react-router-dom';
import NavBar from '../src/components/NavBar';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import axios from 'axios';
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from '../contex/userContex';
import Dashbord from './pages/dashbord';
import Edit from './pages/edit';
import Profile from './pages/profile';
import Itemlist from '../src/pages/itemlist';
import AddNew from '../src/pages/addNew';
import Feedback from './pages/feedbacks';
import Admindashbord from './pages/admin-dashbord'
import CustomerAdminPage from './pages/customerAdmin'
import SupportMessage from './pages/support';
import InvList from './pages/invList'
import UserEdit from './pages/UserEdit';
import CustomerDetailsPage from './pages/CustomerDetailsPage';
import SeeFeedbacksPage from './pages/seefeedbacks';
import InvEdit from '../src/pages/invEdit';
import "bootstrap/dist/css/bootstrap.min.css";
import CreateStallreq from './pages/CreateStallreq';
import StallAdminreq from './pages/StallAdminreq';
import StallCreate from './pages/StallCreate';
import StallOwnerDashboard from './pages/StallOwnerDashboard';
import PizzaMart from './pages/PizzaMart';
import SweetSerenity from './pages/SweetSerenity';
import Asiano from './pages/Asiano';
import SriLankanFoodStall from './pages/SriLankanFoodStall';
import StallLogin from './pages/StallLogin'
import CreateStall from './pages/CreateStall';
import { StallContextProvider } from '../contex/stallContext';



axios.defaults.baseURL='http://localhost:8000';
axios.defaults.withCredentials=true

function App() {
  return (
    <UserContextProvider>
     <StallContextProvider>
    <NavBar/>
    <Toaster position='top-center' toastOptions={{duration:3000}}/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/dashbord' element={<Dashbord/>} />
      <Route path='/edit/:userId' element={<Edit />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/itemlist" element={<Itemlist />} />
      <Route path="/addNew" element={<AddNew />} />
      <Route path="/invEdit/:itemId" element={<InvEdit />} />

      <Route path='/profile' element={<Profile />} />
      <Route path='/feedbacks' element={<Feedback/>} />
      <Route path='/submitsupport' element={<SupportMessage/>}/>
      <Route path='/admin-dashbord' element={<Admindashbord/>}/>
      <Route path='/customerAdmin' element={<CustomerAdminPage/>}/>
      <Route path='/invList' element={<InvList/>}/>
      <Route path='/CustomerDetailsPage' element={<CustomerDetailsPage/>}/>
      <Route path='/UserEdit' element={<UserEdit/>}/>
      <Route path='/Seefeedbacks' element={<SeeFeedbacksPage/>}/>
      <Route path="/UserEdit/:userId" element={<UserEdit />} />

      <Route path='/StallAdminreq' element={<StallAdminreq />}></Route>
      <Route path='/stallreq' element={<CreateStallreq />}></Route>
      <Route path='/stallCreate' element={<StallCreate />}></Route>
      <Route path='/StallOwnerDashboard' element={<StallOwnerDashboard />}></Route>
      <Route path='/pizzaMart' element={<PizzaMart/>}></Route>
      <Route path='/sweetS' element={<SweetSerenity/>}></Route>
      <Route path='/asiano' element={<Asiano/>}></Route>
      <Route path='/slStall' element={<SriLankanFoodStall/>}></Route>
      <Route path='/Stalllogin' element={<StallLogin/>}></Route>
      <Route path='/StallOwnerDashboard' element={<StallOwnerDashboard/>}></Route>      
      <Route path='/createStall' element={<CreateStall/>}></Route>
      <Route path='/createProduct' element={<StallOwnerDashboard/>}></Route>
      <Route path='/getAllProducts' element={<StallOwnerDashboard/>}></Route>

    </Routes>
    </StallContextProvider>
    </UserContextProvider>
  )
}

export default App
