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
import "bootstrap/dist/css/bootstrap.min.css";

import CreateStallreq from './pages/CreateStallreq';
import StallAdminreq from './pages/StallAdminreq';
import StallCreate from './pages/StallCreate';
import PizzaMart from './pages/PizzaMart';
import SweetSerenity from './pages/SweetSerenity';
import Asiano from './pages/Asiano';
import SriLankanFoodStall from './pages/SriLankanFoodStall';
import ReceiptForOrder from './pages/receiptForOrder';
import ReceiptForStall from './pages/receiptForStall';
import GetAllStallData from './pages/getAllStallData';
import GetAllOrderData from './pages/getAllOrderData';
import PaymentMethod from './pages/paymentMethod';
import Paidbycard from './pages/paidByCard';
import CashOnDeliver from './pages/cashOnDeliver';
import FinancePage from './pages/financePage';
import IncomeReport from './pages/incomereport';
import Expenses from './pages/expenses'
import Cart from './pages/CartItems'
import OrderAdminPage from './pages/orderAdmin'
import IncomePage from './pages/Income';
import Payment from './pages/payment';
import UploadSlip from './pages/UploadSlip';

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
      <Route path='/support' element={<SupportMessage/>}/>
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
      <Route path='/stallownerdash' element={<StallOwnerDashboard />}></Route>
      <Route path='/pizzaMart' element={<PizzaMart/>}></Route>
      <Route path='/sweetS' element={<SweetSerenity/>}></Route>
      <Route path='/asiano' element={<Asiano/>}></Route>
      <Route path='/slStall' element={<SriLankanFoodStall/>}></Route>
      <Route path='/Paidbycard' element={<Paidbycard/>}></Route>
      <Route path='/CashOnDeliver' element={<CashOnDeliver/>}></Route>
      <Route path='/GetAllOrderData' element={<GetAllOrderData/>}></Route>
      <Route path='/PaymentMethod' element={<PaymentMethod/>}></Route>
      <Route path='/ReceiptForOrder/:id' element={<ReceiptForOrder/>}></Route>
      <Route path='/ReceiptForStall/:id' element={<ReceiptForStall/>}></Route>
      <Route path='/GetAllStallData' element={<GetAllStallData/>}></Route>
      <Route path='/FinancePage' element={<FinancePage/>}></Route>
      <Route path='/IncomeReport/:id' element={<IncomeReport/>}></Route>
      <Route path='/Expenses' element={<Expenses/>}></Route>
      <Route path='/IncomePage' element={<IncomePage/>}></Route>
      <Route path='/UploadSlip' element={<UploadSlip/>}></Route>

      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/order-admin' element={<OrderAdminPage/>}></Route>
      <Route path='/payment' element={<Payment/>}></Route>
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


    </Routes>
   
    </StallContextProvider>
    </UserContextProvider>
  )
}

export default App
