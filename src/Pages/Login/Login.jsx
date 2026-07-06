import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFirebase } from '../../context/Firebase'

function Login() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const firebase = useFirebase();

    
    
    const handelSubmit = async (e) => {
        e.preventDefault();

        try {
          await firebase.loginEP(email,password);
          
          window.location.href = "/"
          
         alert(`${email} is login`);
        } catch (error) {
           console.log(error.message);
        }

    }


  return (
    <div className='w-full h-screen bg-white text-black flex items-center justify-center'>

        <div className='w-100 flex flex-col items-center justify-center gap-3 p-8 rounded-xl shadow-2xl'>
            <h1 className='text-2xl font-bold'>Log In</h1>
            <form onSubmit={handelSubmit} action="" className='flex flex-col w-full'>
                
                <div className='mb-3 flex flex-col gap-1'>
                  <label htmlFor="email">Email</label>
                <input
                 className='border border-gray-300 outline-none p-2 rounded-[10px]' type="email" placeholder='email' id='email' 
                 value={email}
                  onChange={(e) => setEmail(e.target.value)}
                 />
                </div>
               <div className='mb-3 flex flex-col gap-1'>
                 <label htmlFor="password">Password</label>
                 <input
                  className='border border-gray-300 outline-none p-2 rounded-[10px]' type="password" placeholder='password' id='password' 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
               </div>
               <button className='bg-orange-400 active:bg-orange-600 cursor-pointer  text-white px-3 py-1 rounded-xl' type='submit'>Login</button>
            </form>
            <div className='flex items-center justify-end w-full'>
              <p className='text-[12px] text-zinc-400 '>Alredy registered <Link to="/signup" className='text-blue-600 underline'>Signin</Link></p>
            </div>
        </div>

    </div>
  )
}

export default Login