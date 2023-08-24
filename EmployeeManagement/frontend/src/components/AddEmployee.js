import React from "react";

export default function AddEmployee(){

    return(
       <div className="container">
        <form>
  <div className="mbl-3">
  <label for="name" className="form-label">Employee name</label>
    <input type="text" className="form-control" id="name" placeholder="Enter Employee Name" />
  </div>

  <div className="mbl-3">
    <label for="age" className="form-label">Employee age</label>
    <input type="text" className="form-control" id="age" placeholder="Enter Employee Name" />
  </div>

   <div className="mbl-3">
    <label for="gender" className="form-label">Employee gender</label>
     <input type="text" className="form-control" id="gender" placeholder="Enter Employee Name" />
  </div>

   <button type="submit" className="btn btn-primary">Submit</button>
 </form>
 </div>





    )
    
}