import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom';
import NavBar from '../src/components/NavBar';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import axios from 'axios';
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from '../contex/userContex';
<<<<<<< HEAD

=======
import SeesupportPage from './pages/seesupport';
>>>>>>> e79f536ef7880fd97bac75b40c59d23777e9ce1f
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


<<<<<<< HEAD
=======
import "bootstrap/dist/css/bootstrap.min.css";
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
import AdminConfirm from './pages/admin-confirm';


import CreateStallreq from './pages/CreateStallreq';
import StallAdminreq from './pages/StallAdminreq';
import StallCreate from './pages/StallCreate';
import PizzaMart from './pages/PizzaMart';
import SweetSerenity from './pages/SweetSerenity';
import Asiano from './pages/Asiano';
import SriLankanFoodStall from './pages/SriLankanFoodStall';
import Cart from './pages/CartItems'
import OrderAdminPage from './pages/orderAdmin'
import Payment from './pages/payment'

import StallLogin from './pages/StallLogin'
import StallOwnerDashboard from './pages/StallOwnerDashboard';
import { StallContextProvider } from '../contex/stallContext';
import GetProduct from './pages/GetProduct';
import CreateStall from './pages/CreateStall';
import UpdateProduct from './pages/UpdateProduct';
import OurStallsHomePage from './pages/OurStallsHomePage';
import StallAdmin from './pages/StallAdmin';
import CreatedStallsAdminView from './pages/CreatedStallsAdminView';
import MarketingAndPromotionAdmin from './pages/MarketingAndPromotionAdmin';
import TicketForm from './pages/TicketForm';
import AdminTicketList from './pages/AdminTicketList';
import SeeMenuPage from './pages/SeeMenuPage';
>>>>>>> e79f536ef7880fd97bac75b40c59d23777e9ce1f

axios.defaults.baseURL='http://localhost:8000';
axios.defaults.withCredentials=true

function App() {
  return (
    <UserContextProvider>
<<<<<<< HEAD
=======
     <StallContextProvider>
>>>>>>> e79f536ef7880fd97bac75b40c59d23777e9ce1f
      
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

<<<<<<< HEAD
    

=======

      <Route path="/addNewEvent" element={<AddNewEvent />}/>
      <Route path="/eventList" element={<EventList />}/>
>>>>>>> e79f536ef7880fd97bac75b40c59d23777e9ce1f
     
      <Route path="/UserEdit/:userId" element={<UserEdit />} />

      <Route path='/StallAdminreq' element={<StallAdminreq />}></Route>
      <Route path='/stallreq' element={<CreateStallreq />}></Route>
      <Route path='/stallCreate' element={<StallCreate />}></Route>
      <Route path='/StallOwnerDashboard' element={<StallOwnerDashboard />}></Route>
      <Route path='/shop/1' element={<PizzaMart />} />
      <Route path='/shop/3' element={<SweetSerenity/>}></Route>
      <Route path='/shop/4' element={<Asiano/>}></Route>
      <Route path='/shop/2' element={<SriLankanFoodStall/>}></Route>
      <Route path='/createStall' element={<CreateStall/>}></Route>
      <Route path='/Stalllogin' element={<StallLogin/>}></Route>
      <Route path='/StallOwnerDashboard' element={<StallOwnerDashboard/>}></Route>       
      <Route path='/GetProduct' element={<GetProduct/>}></Route>
      <Route path='/update/:id' element={<UpdateProduct/>}></Route>
      <Route path='/OurStallsHomePage' element={<OurStallsHomePage/>}></Route> 
      <Route path='/stallAdmin' element={<StallAdmin />}></Route>
      <Route path='/createdStalls' element={<CreatedStallsAdminView />}></Route>
      <Route path='/promotions' element={<MarketingAndPromotionAdmin />}></Route>
      <Route path='/createTicket' element={<TicketForm />}></Route>
      <Route path='/getTicket' element={<AdminTicketList />}></Route>
      <Route path='/menu' element={<SeeMenuPage />}></Route>


      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/order-admin' element={<OrderAdminPage/>}></Route>
      <Route path='/payment' element={<Payment/>}></Route>

     
      <Route path="/eventListUser" element={<EventListUser />}/>
      <Route path="/eventSuccess" element={<EventSuccess />}/>
      <Route path="/eventHome" element={<EventHome />}/>
      <Route path="/eventDetail" element={<EventDetail />}/>
      <Route path="/eventAbout" element={<EventAbout />}/>
      <Route path="/eventDel" element={<EventDel />}/>
      <Route path="/eventDetail2" element={<EventDetail2 />}/>
      <Route path="/eventDetail3" element={<EventDetail3 />}/>
      <Route path="/eventDetail4" element={<EventDetail4 />}/>
      <Route path="/eventUpdate/:eventId" element={<EventUpdate />} />
      <Route path="/admin-confirm" element={<AdminConfirm />} />



    </Routes>
<<<<<<< HEAD
    
=======
   
    </StallContextProvider>
>>>>>>> e79f536ef7880fd97bac75b40c59d23777e9ce1f
    </UserContextProvider>
  )
}

export default App
