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
import StallOwnerDashboard from './pages/StallOwnerDashboard';
import PizzaMart from './pages/PizzaMart';
import SweetSerenity from './pages/SweetSerenity';
import Asiano from './pages/Asiano';
import SriLankanFoodStall from './pages/SriLankanFoodStall';
import Paidbycard from './pages/paidByCard';
import CashOnDeliver from './pages/cashOnDeliver';
import GetAllOrderData from './pages/getAllOrderData';
import PaymentMethod from './pages/paymentMethod';
import ReceiptForOrder from './pages/receiptForOrder';
import ReceiptForStall from './pages/receiptForStalls';
import GetAllStallData from './pages/getAllStallData';
import FinancePage from './pages/financePage';
import CardDetails from './pages/CreditCard';
import Expenses from './pages/expenses'
import Cart from './pages/CartItems'
import OrderAdminPage from './pages/orderAdmin'
import IncomePage from './pages/Income';
import Payment from './pages/payment';
import AdminFinance from './pages/adminFinance';
import SuccessfullPayment from './pages/successfullPayments';
import ViewSuccessPayments from './pages/ViewSuccessPayments'

import PaymentSuccess from './pages/paymentSuccess';
import UpdateIncomePage from './pages/updateIncome';
import UpdateExpenses from './pages/updateExpenses';
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
      <Route path='/PaymentMethod/:id' element={<PaymentMethod/>}></Route>
      <Route path='/ReceiptForOrder/:id' element={<ReceiptForOrder/>}></Route>
      <Route path='/ReceiptForStall/:id' element={<ReceiptForStall/>}></Route>
      <Route path='/GetAllStallData' element={<GetAllStallData/>}></Route>
      <Route path='/FinancePage' element={<FinancePage/>}></Route>
      <Route path='/Expenses' element={<Expenses/>}></Route>
      <Route path='/IncomePage' element={<IncomePage/>}></Route>
      <Route path="/updateIncome/:Id" element={<UpdateIncomePage />} />
      <Route path="/updateExpense/:Id" element={<UpdateExpenses />} />
      <Route path="/CardDetails/:id" element={<CardDetails />} />
      <Route path="/AdminFinance" element={<AdminFinance />} />
      <Route path='/PaymentSuccess' element={<PaymentSuccess/>}></Route>
      <Route path='/SuccessfullPayment' element={<SuccessfullPayment/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/order-admin' element={<OrderAdminPage/>}></Route>
      <Route path='/payment' element={<Payment/>}></Route>
      <Route path='/ViewSuccessPayments' element={<ViewSuccessPayments/>}></Route>



     
    </Routes>
    </UserContextProvider>
  )
}

export default App
