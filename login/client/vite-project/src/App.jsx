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
import Event from '../src/pages/event';
import EventUpdate from '../src/pages/eventUpdate';
import EventDelete from '../src/pages/eventDelete';
import EventSuccess from '../src/pages/eventSuccess';
import EventAbout from '../src/pages/eventAbout';
import EventDetail from '../src/pages/eventDetail';
import EventDel from '../src/pages/eventDel';
import EventHome from '../src/pages/eventHome';




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


    <Route path='/event' element={<Event/>}/>
     <Route path='/eventUpdate' element={<EventUpdate/>}/>
     <Route path='/eventDelete' element={<EventDelete/>}/>
    <Route path='/eventSuccess' element={<EventSuccess/>}/>
     <Route path='/eventAbout' element={<EventAbout/>}/>
    <Route path='/eventDetail' element={<EventDetail/>}/>
    <Route path='/eventDel' element={<EventDel/>}/>
    <Route path='/eventHome' element={<EventHome/>}/>
     
    </Routes>
    </UserContextProvider>
  )
}

export default App
