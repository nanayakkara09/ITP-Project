import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes, Route} from 'react-router-dom';
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
import SeeFeedbacksPage from './pages/Seefeedbacks';
import InvEdit from '../src/pages/invEdit';
import ItemDetails from '../src/pages/itemDetails';
import AddStock from '../src/pages/addStock';
import SeesupportPage from './pages/seesupport';
import Password from './pages/password';
import IssueEntry from './pages/issueEntry';
import IssuedDetails from './pages/IssuedDetails';
import ItemlistFur from '../src/pages/itemlistFur';
import ItemlistMac from '../src/pages/itemlistMac';
import AddNewFur from '../src/pages/addNewFur';
import AddNewMac from '../src/pages/addNewMac';









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
      <Route path="/itemDetails/:itemcode" element={<ItemDetails />} />
      <Route path="/addStock/:itemcode" element={<AddStock />} />
      <Route path="/IssueEntry" element={<IssueEntry />} />
      <Route path="/IssuedDetails" element={<IssuedDetails />} />
      <Route path="/itemlistFur" element={<ItemlistFur />} />
      <Route path="/itemlistMac" element={<ItemlistMac />} />
      <Route path="/addNewFur" element={<AddNewFur />} />
      <Route path="/addNewMac" element={<AddNewMac />} />







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
  
   
     
    </Routes>
    </UserContextProvider>
  )
}

export default App
