import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import {BrowserRouter , Route , Link , Switch, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen/>}/><Route/>
          <Route path="/cart" element={<Cartscreen/>}></Route>
          <Route path="/register" element={<Registerscreen/>}></Route>
          <Route path="/login" element={<Loginscreen/>}></Route>
          <Route path="/orders" element={<Ordersscreen/>}></Route>

          
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
