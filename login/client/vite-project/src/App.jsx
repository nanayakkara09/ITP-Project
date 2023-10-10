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
import { EmployeeContextProvider } from '../contex/EmployeeContext';
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

import GetEmployee from './pages/GetEmployee';
import CreateEmployee from './pages/CreateEmployee';
import UpdateEmployee from './pages/UpdateEmployee';
import LoginEmployee from './pages/LoginEmployee';


import EmployeeDashboardHome from './pages/EmployeeDashboardHome';
import CreateEmployeeShift from './pages/CreateEmployeeShift';
import GetEmployeeShift from './pages/GetEmployeeShift';
import UpdateEmployeeShift from './pages/UpdateEmployeeShift';
import EmployeeDashboard from './pages/EmployeeDashboard';

import CreateEmployeeLeave from './pages/CreateEmployeeLeave';
import GetEmployeeLeaveA from './pages/GetEmployeeLeaveA';

import CreateEmployeeContact from './pages/CreateEmployeeContact';
import GetEmployeeContact from './pages/GetEmployeeContact';

import CreateEmployeeNews from './pages/CreateEmployeeNews';
import GetEmployeeNews from './pages/GetEmployeeNews';

import CreateEmployeeSalary from './pages/CreateEmployeeSalary';
import GetEmployeeSalary from './pages/GetEmployeeSalary';


axios.defaults.baseURL='http://localhost:8000';
axios.defaults.withCredentials=true

function App() {
  return (
    <UserContextProvider>
      <EmployeeContextProvider>
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

    <Route path='/employeeDashboard' element={<EmployeeDashboard />} />

  <Route path='/getEmployee' element={<GetEmployee />} />
  <Route path='/createEmployee' element={<CreateEmployee />} />
  <Route path='/loginEmployee' element={<LoginEmployee />} />
  <Route path = '/employeeDashboardHome' element={<EmployeeDashboardHome/>} />
  <Route path='/updateEmployee/:_id' element={<UpdateEmployee />} />


  <Route path='/getEmployeeShift' element={<GetEmployeeShift />} />
  <Route path='/createEmployeeShift' element={<CreateEmployeeShift />} />
  <Route path='/updateEmployeeShift/:_id' element={<UpdateEmployeeShift />} />

  <Route path='/createEmployeeLeave' element={<CreateEmployeeLeave />} />
  <Route path='/getEmployeeLeaveA' element={<GetEmployeeLeaveA />} />


  <Route path='/createEmployeeContact' element={<CreateEmployeeContact />} />
  <Route path='/getEmployeeContact' element={<GetEmployeeContact />} />

<Route path='/createEmployeeNews' element={<CreateEmployeeNews />} />
<Route path='/getEmployeeNews' element={<GetEmployeeNews />} />

<Route path='/createEmployeeSalary' element={<CreateEmployeeSalary/>}/>
<Route path='/getEmployeeSalary' element={<GetEmployeeSalary/>}/>

     
    </Routes>
    </EmployeeContextProvider>
    </UserContextProvider>
  )
}

export default App
