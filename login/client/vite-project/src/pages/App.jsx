import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import CreateStallreq from './CreateStallreq'
import UpdateStall from './UpdateStall'
import Stalls from './Stalls'
import StallAdminreq from './StallAdminreq'
import StallCreate from './StallCreate';
import StallOwnerDashboard from './StallOwnerDashboard';


function App() {
  const [count, setCount] = useState(0);

  // Define stallData with required properties
  const stallData = {
    name: "Your Stall Name",
    description: "Stall Description",
    logoUrl: "path/to/logo.png",
  };
  

  return (
    <Router> {/* Wrap your entire app with the <Router> component */}
      <div>
        <Routes>
          <Route path='/' element={<StallAdminreq />}></Route>
          <Route path='/createStallreq' element={<CreateStallreq />}></Route>
          <Route path='/updateStall' element={<UpdateStall />}></Route>
          <Route path='/stallCreate' element={<StallCreate />}></Route>
          <Route path='/stallownerdash' element={<StallOwnerDashboard />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
