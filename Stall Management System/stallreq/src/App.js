import React from 'react';
import "./App.css";
import {BrowserRouter,Routes,Route}from "react-router-dom";
import{RequestPage} from "./Routes.js";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/requestpage' element={<RequestPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
