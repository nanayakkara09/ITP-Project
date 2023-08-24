
import './App.css';
import {BrowserRouter as Router,Route, BrowserRouter, Routes} from "react-router-dom"
import Header from './components/Header';
import AddEmployee from './components/AddEmployee';


function App() {
  return (
    // <Router>
    // <div>
    //   <Header/>

    //   <Route path="/add" exact component={AddEmployee} />

    // </div>
    // </Router>



    <BrowserRouter basename="/">
      
       <Header/>
       <AddEmployee/>
      <Routes>
      { <Route path="/add/" exact component={AddEmployee} /> }
    

      
      </Routes>
      
    </BrowserRouter>




  );
}

export default App;






