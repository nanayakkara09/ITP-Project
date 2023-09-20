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
import Feedback from './pages/feedbacks';
import Admindashbord from './pages/admin-dashbord'
import CustomerAdminPage from './pages/customerAdmin'
import SupportMessage from './pages/support';
import UserEdit from './pages/UserEdit';
import CustomerDetailsPage from './pages/CustomerDetailsPage';
import SeeFeedbacksPage from './pages/seefeedbacks';


import CustomerDetailsPage from './pages/CustomerDetailsPage';
import SeeFeedbacksPage from './pages/seefeedbacks';


axios.defaults.baseURL='http://localhost:8000';
axios.defaults.withCredentials=true

function App() {
  return (
    <UserContextProvider>
    <NavBar/>
    <Toaster position='top-center' toastOptions={{duration:3000}}/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/dashbord' element={<Dashbord/>} />
      <Route path='/edit' element={<Edit/>} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/feedbacks' element={<Feedback/>} />
      <Route path='/submitsupport' element={<SupportMessage/>}/>
      <Route path='/admin-dashbord' element={<Admindashbord/>}/>
      <Route path='/customerAdmin' element={<CustomerAdminPage/>}/>
      <Route path='/CustomerDetailsPage' element={<CustomerDetailsPage/>}/>

      <Route path='/UserEdit' element={<UserEdit/>}/>
      <Route path='/Seefeedbacks' element={<SeeFeedbacksPage/>}/>
    <Route path="/UserEdit/:userId" element={<UserEdit />} />

      <Route path='/SeeFeedbacks' element={<SeeFeedbacksPage/>}/>

     
    </Routes>
    </UserContextProvider>
  )
}

export default App
