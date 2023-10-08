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
import SeesupportPage from './pages/seesupport';
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
import SeeFeedbacksPage from './pages/Seefeedbacks';
import InvEdit from '../src/pages/invEdit';
import Password from '../src/pages/password'


import AddNewEvent from './pages/addNewEvent';
import EventList from './pages/eventList';
import EventUpdate from '../src/pages/eventUpdate';

import EventSuccess from '../src/pages/eventSuccess';
import EventHome from './pages/eventHome';
import EventDetail from './pages/eventDetail';
import EventAbout from './pages/eventAbout';
import EventDel from './pages/eventDel';
import EventDetail2 from './pages/eventDetail2';
import EventDetail3 from './pages/eventDetail3';
import EventDetail4 from './pages/eventDetail4';
import EventListUser from './pages/eventListUser';



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
      <Route path='/edit/:userId' element={<Edit />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/itemlist" element={<Itemlist />} />
      <Route path="/addNew" element={<AddNew />} />
      <Route path="/invEdit/:itemId" element={<InvEdit />} />

      <Route path='/profile' element={<Profile />} />
      <Route path='/feedbacks' element={<Feedback/>} />
      <Route path='/support' element={<SupportMessage/>}/>
      <Route path='/admin-dashbord' element={<Admindashbord/>}/>
      <Route path='/customerAdmin' element={<CustomerAdminPage/>}/>
      <Route path='/invList' element={<InvList/>}/>
      <Route path='/CustomerDetailsPage' element={<CustomerDetailsPage/>}/>
      <Route path='/UserEdit' element={<UserEdit/>}/>
      <Route path='/Seefeedbacks' element={<SeeFeedbacksPage/>}/>
      <Route path='/seesupport' element={<SeesupportPage/>}/>
      <Route path='/password' element={<Password/>}/>
    <Route path="/UserEdit/:userId" element={<UserEdit />} />


      <Route path="/addNewEvent" element={<AddNewEvent />}/>
      <Route path="/eventList" element={<EventList />}/>
      <Route path="/eventUpdate" element={<EventUpdate />}/>
      <Route path="/eventListUser" element={<EventListUser />}/>
      <Route path="/eventSuccess" element={<EventSuccess />}/>
      <Route path="/eventHome" element={<EventHome />}/>
      <Route path="/eventDetail" element={<EventDetail />}/>
      <Route path="/eventAbout" element={<EventAbout />}/>
      <Route path="/eventDel" element={<EventDel />}/>
      <Route path="/eventDetail2" element={<EventDetail2 />}/>
      <Route path="/eventDetail3" element={<EventDetail3 />}/>
      <Route path="/eventDetail4" element={<EventDetail4 />}/>



    </Routes>
    </UserContextProvider>
  )
}

export default App
