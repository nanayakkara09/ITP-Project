import  { React,  useState } from "react";
import {AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { server } from "./server";

const RequestForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [stallName, setStallName] = useState("");
  const [cuisineType, setCuisineType] = useState("Italian"); // Default value
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
     const config = {headers: { "Content-Type": "multipart/form-data"}} ;

     const newForm = new FormData();

     newForm.append("firstName", firstName);
     newForm.append("lastName", lastName);
     newForm.append("email", email);
     newForm.append("phone", phone);
     newForm.append("stallName", stallName);
     newForm.append("cuisineType", cuisineType);
     newForm.append("agreeToTerms", agreeToTerms);
     
    //e.preventDefault();

    /*  axios
      .post("/api/v2/user/create-user", {
        firstName,
        lastName,
        email,
        phoneNumber: phone,
        stallName,
        cuisineType,
        agreeToTerms,
      })
      .then((res) => {
        toast.success(res.data.message);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setStallName("");
        setCuisineType("Italian"); // Reset to default value
        setAgreeToTerms(false); // Reset to false
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  }; */        

      axios
        .post(`${server}/user/create-user` ,newForm, config)
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            if (error.response && error.response.status === 400) {
                toast.error(error.response.data.message); // Display the user-friendly error message
              } else {
                toast.error("An error occurred while processing your request.");
              }
        });
    };      


  return (
    <div>
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Food Stall Request Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="stall_name" className="block text-sm font-medium text-gray-700">Stall Name</label>
            <input
              type="text"
              id="stall_name"
              name="stall_name"
              required
              value={stallName}
              onChange={(e) => setStallName(e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="cuisine_type" className="block text-sm font-medium text-gray-700">Cuisine Type</label>
            <select
              id="cuisine_type"
              name="cuisine_type"
              value={cuisineType}
              onChange={(e) => setCuisineType(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="Italian">Italian</option>
              <option value="Mexican">Mexican</option>
              <option value="Chinese">Chinese</option>
              <option value="Indian">Indian</option>
              {/* Add more cuisine types as needed */}
            </select>
          </div>
          <div>
            <label htmlFor="agree_to_terms" className="flex items-center">
              <input
                type="checkbox"
                id="agree_to_terms"
                name="agree_to_terms"
                required
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2 text-sm text-gray-600">
                I agree to the <a href="/terms" className="text-indigo-600">terms and conditions</a>.
              </span>
            </label>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;
