import React from 'react';

const PersonalInfoPart = ({data, setData}) => {
  return (
    <div className="space-y-6">
      {/* Username Section */}
      <div className='mt-1'>
        <label className="block text-sm font-medium text-gray-700 pb-2">First Name</label>
        <input 
        onChange={(e) => setData({ ...data, firstName: e.target.value })}
        value={data.firstName}
        type='text' 
        id='fname' 
        className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:border-indigo-500 sm:text-sm"/>
      </div>
      
      <div className='mt-1'>
        <label className="block text-sm font-medium text-gray-700 pb-2">Last Name</label>
        <input 
        onChange={(e) => setData({ ...data, lastName: e.target.value })}
        value={data.lastName}
        type='text' 
        id='lname' 
        className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:border-indigo-500 sm:text-sm"/>
      </div>

      {/*Email Section */}
      <div className='mt-1'>
        <label className="block text-sm font-medium text-gray-700 pb-2">Email</label>
        <input
        onChange={(e) => setData({ ...data, email: e.target.value })}
        value={data.email} 
        type='email' 
        id='email' 
        className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:border-indigo-500 sm:text-sm"/>
      </div>
      
      {/*number Section */}
      <div className='mt-1'>
        <label className="block text-sm font-medium text-gray-700 pb-2">Phone Number</label>
        <input 
        onChange={(e) => setData({ ...data, phone: e.target.value })}
        value={data.phone}
        type='phone' 
        id='phone' 
        className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:border-indigo-500 sm:text-sm"/>
      </div>

    </div>
  );
}

export default PersonalInfoPart;
