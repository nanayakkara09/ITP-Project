import SignUpPart from '../components/SignUpPart';
import PersonalInfoPart from '../components/PersonalInfoPart';
import PaymentPart from '../components/PaymentPart';
import logo from '../assests/logo.jpg';
import { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [page, setPage] = useState(0); 
  const [data, setData] = useState ({
    stallname: '',
    type: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardtype: '',
    cardNumber: '',
    expireYear: '',
    expireMonth: '',
    cvn: ''
  })

  const RegisterUser = async (e) => {
    const {stallname, type, password, firstName, lastName, email, phone, cardtype, cardNumber, expireYear, expireMonth, cvn } = data
    e.preventDefault();
    try{
      await axios.post('/register', {
        stallname,
        type,
        password,
        firstName,
        lastName,
        email,
        phone,
        cardtype,
        cardNumber,
        expireYear,
        expireMonth,
        cvn
      })
      alert("registration successful")
    } catch (error) {
      alert('Registration Failed') 
      console.log(error)
    }

    
  }   

  const titles = ["Merchant SignUp", "Contact Information", "Payment Details"];
  const progressBarWidth = ((page + 1) / titles.length) * 100; // Calculate progress bar width

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpPart data={data} setData={setData}/>
    } else if (page === 1) {
      return <PersonalInfoPart data={data} setData={setData}/>
    } else {
      return <PaymentPart data={data} setData={setData}/>
    }
  }
  

  return (
    <div className='bg-gradient-to-r from-slate-100 to-red-600 w-full h-full min-h-full flex flex-col justify-center py-36 sm:px-6 lg:px-8 z-100 mf:h-screen'>
        <div>
           <div className="w-full bg-white h-2 rounded-lg mb-4">
             <div className="bg-indigo-500 h-2 rounded-lg" style={{ width: `${progressBarWidth}%` }}></div>
           </div>
        </div>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
           <img className='mx-auto h-24 w-auto' src={logo} alt="/"/>
           <h1 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
           {titles[page]}
           </h1>
        </div>
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            
            <div>{PageDisplay()}</div>
            <div className='flex flex-row gap-3 pt-8'>
               <button
               disabled={page === 0}
               onClick={() => {
                 setPage((currPage) => currPage - 1)
               }}
               
               className='flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-[#BF202F] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                Prev</button> 
               <button 
               onClick={(e) => {
                if (page === titles.length - 1){
                  alert('Form Submitted')
                  RegisterUser(e);
                  console.log(data)
                } else {
                  setPage((currPage) => currPage + 1)
                }
             }}
               
               className='flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-[#BF202F] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                {page === titles.length - 1 ? "Submit" : "Next"}</button> 
            </div>
            </div>
        </div>
    </div>
    
  );
}

export default Form;
