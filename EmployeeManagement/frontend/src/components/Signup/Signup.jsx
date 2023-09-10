import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [nameA, setNameA] = useState("");
  const [nameB, setNameB] = useState("");
  const [nameC, setNameC] = useState("");
  const [nameD, setNameD] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [avatarA,setAvatarA] = useState(null);
  const [avatarB,setAvatarB] = useState(null);
  const [avatarC,setAvatarC] = useState(null);
  const [avatarD,setAvatarD] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+94");
  const [idNumber, setIdNumber] = useState("");
  const [idNumberA,setIdNumberA] = useState("");
  const [idNumberB,setIdNumberB] = useState("");
  const [idNumberC,setIdNumberC] = useState("");
  const [idNumberD,setIdNumberD] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [passwordsMatch] = useState(true);
  const [step, setStep] = useState(1);
  


 




  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const config = {headers: {"Content-Type":"multipart/form-data"}};
    const newForm = new FormData();

    newForm.append("avatar", avatar);
    newForm.append("name", name);
    newForm.append("email", email);
    newForm.append("countryCode", countryCode);
    newForm.append("phoneNumber", phoneNumber);
    newForm.append("password", password);
    newForm.append("cpassword", cPassword);
    newForm.append("idNumber", idNumber);
    newForm.append("nameA", nameA);
    newForm.append("nameB", nameB);
    newForm.append("nameC", nameC);
    newForm.append("nameD", nameD);
    newForm.append("idNumberA", idNumberA);
    newForm.append("idNumberB", idNumberB);
    newForm.append("idNumberC", idNumberC);
    newForm.append("idNumberD", idNumberD);
    newForm.append("avatarA", avatarA);
    newForm.append("avatarB", avatarB);
    newForm.append("avatarC", avatarC);
    newForm.append("avatarD", avatarD);

    axios.post(`${server}/employee/create-employee`,newForm,config).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err);
    })
  };



  

  const renderFormSection = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="mt-6 mb-2 text-lg font-semibold">
              Step 1: Team leader Basic Info
            </h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="flex mb-4">
              <div className="w-1/3 mr-2">
                <label className="block text-sm font-medium text-gray-700">
                  Country Code
                </label>
                <select
                  name="countryCode"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="+1">+1 (USA)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+91">+91 (India)</option>
                  <option value="+94">+94 (LK)</option>
                  {/* Add more country codes as needed */}
                </select>
              </div>
              <div className="w-2/3 ml-2">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="Phonenumber"
                  autoComplete="phoneNumber"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                ID Number
              </label>
              <input
                type="text"
                name="idNumber"
                autoComplete="idNumber"
                required
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                className="w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={visible ? "text" : "password"}
                  name="cPassword"
                  autoComplete="current-password"
                  required
                  value={cPassword}
                  onChange={(e) => setCPassword(e.target.value)}
                  className={`w-full px-3 py-2 border ${
                    passwordsMatch ? "border-gray-300" : "border-red-500"
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                {!passwordsMatch && (
                  <p className="text-red-500 text-sm mt-1">
                    Passwords do not match.
                  </p>
                )}
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Avatar
              </label>
              <div className="mt-2 flex items-center">
                <span className="inline-block w-8 h-8 rounded-full overflow-hidden bg-gray-300">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : null}
                </span>
                <label className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="file"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={(e) => setAvatar(e.target.files[0])}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={nextStep}
                className="group relative w-full h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Next
              </button>
            </div>
            <div className="flex items-center mt-4">
              <h4 className="text-sm">Already have an account?</h4>
              <Link to="/login" className="text-blue-600 pl-2">
                Login
              </Link>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="mt-6 mb-2 text-lg font-semibold">
              Step 2: Team members details
            </h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="text"
                autoComplete="nameA"
                required
                value={nameA}
                onChange={(e) => setNameA(e.target.value)}
                className="w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                ID Number
              </label>
              <input
                type="text"
                name="idNumberA"
                autoComplete="idNumberA"
                required
                value={idNumberA}
                onChange={(e) => setIdNumberA(e.target.value)}
                className="w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
             </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Avatar
              </label>
              <div className="mt-2 flex items-center">
                <span className="inline-block w-8 h-8 rounded-full overflow-hidden bg-gray-300">
                  {avatarA ? (
                    <img
                      src={URL.createObjectURL(avatarA)}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : null}
                </span>
                <label className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="file"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={(e) => setAvatarA(e.target.files[0])}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="text"
                autoComplete="nameB"
                required
                value={nameB}
                onChange={(e) => setNameB(e.target.value)}
                className="w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                ID Number
              </label>
              <input
                type="text"
                name="idNumberB"
                autoComplete="idNumberB"
                required
                value={idNumberB}
                onChange={(e) => setIdNumberB(e.target.value)}
                className="w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
             </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Avatar
              </label>
              <div className="mt-2 flex items-center">
                <span className="inline-block w-8 h-8 rounded-full overflow-hidden bg-gray-300">
                  {avatarB ? (
                    <img
                      src={URL.createObjectURL(avatarB)}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : null}
                </span>
                <label className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="file"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={(e) => setAvatarB(e.target.files[0])}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="text"
                autoComplete="nameC"
                required
                value={nameC}
                onChange={(e) => setNameC(e.target.value)}
                className="w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                ID Number
              </label>
              <input
                type="text"
                name="idNumberC"
                autoComplete="idNumberC"
                required
                value={idNumberC}
                onChange={(e) => setIdNumberC(e.target.value)}
                className="w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
             </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Avatar
              </label>
              <div className="mt-2 flex items-center">
                <span className="inline-block w-8 h-8 rounded-full overflow-hidden bg-gray-300">
                  {avatarC ? (
                    <img
                      src={URL.createObjectURL(avatarC)}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : null}
                </span>
                <label className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="file"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={(e) => setAvatarC(e.target.files[0])}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="nameD"
                autoComplete="nameD"
                required
                value={nameD}
                onChange={(e) => setNameD(e.target.value)}
                className="w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                ID Number
              </label>
              <input
                type="text"
                name="idNumberD"
                autoComplete="idNumberD"
                required
                value={idNumberD}
                onChange={(e) => setIdNumberD(e.target.value)}
                className="w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
             </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Avatar
              </label>
              <div className="mt-2 flex items-center">
                <span className="inline-block w-8 h-8 rounded-full overflow-hidden bg-gray-300">
                  {avatarD ? (
                    <img
                      src={URL.createObjectURL(avatarD)}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : null}
                </span>
                <label className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="file"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={(e) => setAvatarD(e.target.files[0])}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="group relative w-1/2 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Previous
              </button>
              <div className="w-4"></div>
              <button
                type="submit"
                className="group relative w-1/2 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register as a new user
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit} action="post">
            {renderFormSection()}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;