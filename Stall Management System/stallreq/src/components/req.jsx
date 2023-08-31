import React from 'react';

const req = () => {
  return (
    
   
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" href="styles.css"/>
  <title>Food Stall Request Form</title>
</head>
<body>
  <div class="container">
    <h1>GET STARTED 👋</h1>
    <br/>
    <p className="text-lg  text-gray-500">
      Join our E-learning platform today and unlock over 500+ courses and digital assets ready to download.
    </p>

    <form>

      <div class="form-group">
        <label for="business-name">Stall Name</label>
        <input type="text" id="stall-name" name="business-name" placeholder="Enter your Stall Name"required/>
      </div>

      <div class="form-group">
        <label for="cuisine-type">Cuisine Type</label>
         <select id="cuisine-type" name="cuisine-type" required>
             <option value="">Select Cuisine Type</option>
             <option value="italian">Italian</option>
             <option value="mexican">Mexican</option>
             <option value="chinese">Chinese</option>
             <option value="indian">Indian</option>
             <option value="indian">Sri Lankan</option>
        </select>
      </div>

      <div class="form-group">
        <label for="name">First Name</label>
        <input type="text" id="name" name="name" placeholder='Enter your first name' required/>
      </div>

      <div class="form-group">   
        <label for="name">Last Name</label>
        <input type="text" id="name" name="name" placeholder='Enter your last name'required/>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 "
        type="email" id="email" name="email" placeholder='Enter your email' required/>
      </div>

      <div class="form-group">
      <label for="phonenumber">Phone Number</label>
        <input type="text" id="mobile_code" class="form-control" placeholder="Phone Number" name="name"/>
      </div>

      


      <br/>

      <div class="wrap">
  <button class="button">Submit</button>
</div>
    </form>
  </div>
</body>
</html>

    
    

  )
}

export default req;
