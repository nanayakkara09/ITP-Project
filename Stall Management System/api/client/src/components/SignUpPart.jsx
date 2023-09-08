import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";

const SignUpPart = ({data, setData}) => {

  const [passwordEye, setPasswordEye] = useState(false);
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

   // handle password eye
   const handlePassword = () => {
    setPasswordEye(!passwordEye);
  };

  // handle confirm password eye
  const handleConfirmPassword = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };

  return (
    <div className="space-y-6">
      {/* Username Section */}
      <div className='mt-1'>
        <label className="block text-sm font-medium text-gray-700 pb-2">Stall Name</label>
        <input
         onChange={(e) => setData({ ...data, stallname: e.target.value })}
         value={data.stallname}
        type='text' 
        id='stallname' 
        className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:border-indigo-500 sm:text-sm"/>
      </div>

      {/* Cuisine Type Section as Dropdown */}
      <div className='mt-1'>
        <label className="block text-sm font-medium text-gray-700 pb-2">Cuisine Type</label>
        <select
          onChange={(e) => setData({ ...data, cuisiontype: e.target.value })}
          value={data.cuisiontype}
          id='cuisiontype' 
          className="block w-full h-14 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:border-indigo-500 sm:text-sm"
        >
          <option value="italian">Italian</option>
          <option value="mexican">Mexican</option>
          <option value="indian">Indian</option>
          <option value="chinese">Chinese</option>
          <option value="japanese">Japanese</option>
          <option value="korean">Korean</option>
          <option value="srilankan">Sri Lankan</option>
        </select>
      </div>

      {/*Password Section */}
      <div className='mt-1 relative'>
        <label className="block text-sm font-medium text-gray-700 pb-2">Password</label>
        <input 
        onChange={(e) => setData({ ...data, password: e.target.value })}
        value={data.password}
         type={passwordEye === false ? 'password' : 'text'}
         id='password' 
         className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:border-indigo-500 sm:text-sm"/>
         <div className="text-2xl absolute top-10 right-5 cursor-pointer">
          {passwordEye === false ? (
            <AiFillEyeInvisible onClick={handlePassword} />
          ) : (
            <AiFillEye onClick={handlePassword} />
          )}
        </div>
      </div>

      <div className='mt-1 relative'>
        <label className="block text-sm font-medium text-gray-700 pb-2">Confirm Password</label>
        <input
        onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
        value={data.confirmPassword} 
        type={confirmPasswordEye === false ? 'password' : 'text'}
         id='confirmpass' 
         className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:border-indigo-500 sm:text-sm"/>
         <div className="text-2xl absolute top-10 right-5 cursor-pointer">
          {confirmPasswordEye === false ? (
            <AiFillEyeInvisible onClick={handleConfirmPassword} />
          ) : (
            <AiFillEye onClick={handleConfirmPassword} />
          )}
        </div>
      </div>

    </div>
  );
}

export default SignUpPart;
