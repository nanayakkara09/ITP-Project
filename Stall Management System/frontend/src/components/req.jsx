import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function RequestForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    stallName: "",
    cuisineType: "Italian", // Default value
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/your-backend-endpoint", formData);
      console.log("Request submitted:", response.data);
      toast.success("Request submitted successfully!");
    } catch (error) {
      console.error("Error submitting request:", error);
      toast.error("Error submitting request. Please try again later.");
    }
  };
  return (
    
   
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css" rel="stylesheet"/>
      <title>Food Stall Request Form</title>
    </head>
    <body class="bg-gray-100 flex justify-center items-center h-screen">
      <div class="container mx-auto p-8">
        <h1 class="text-2xl font-semibold mb-6">Food Stall Request Form</h1>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 grid grid-cols-2 gap-4">
          
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="first-name">First Name</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first-name" type="text" placeholder="First Name" required/>
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="last-name">Last Name</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last-name" type="text" placeholder="Last Name" required/>
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="phone-number">Phone Number</label>
            <div class="flex">
              <select class="w-1/4 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="country-code">
                
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                
              </select>
              <input class="w-3/4 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone-number" type="tel" placeholder="Phone Number" pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number" required/>
            </div>
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" required/>
          </div>
    
          
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="stall-name">Stall Name</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="stall-name" type="text" placeholder="Stall Name" required/>
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="cuisine-type">Cuisine Type</label>
            <select class="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cuisine-type">
              
              <option value="Italian">Italian</option>
              <option value="Mexican">Mexican</option>
              
            </select>
          </div>

          

          <fieldset>
  <legend class="sr-only">Checkbox variants</legend>

  <div class="flex items-center mb-4">
      <input checked id="checkbox-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
      <label for="checkbox-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
  </div>
  </fieldset>
<div class="col-span-2">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
              Submit Request
            </button>
          </div>

        </form>
      </div>
    </body>
    </html>
    
   

  );
}

export default RequestForm;
