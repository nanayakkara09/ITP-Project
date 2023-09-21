import React from 'react';
import "./App.css";
// import { ToastContainer } from 'react-toastify';
import {BrowserRouter,Routes,Route}from "react-router-dom";
import{EmployeeSignupPage} from "./Routes.js";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/employeesignup' element={<EmployeeSignupPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;