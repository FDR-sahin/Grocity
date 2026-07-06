import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFirebase } from '../../context/Firebase';

function Signup() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const firebase = useFirebase();

    // console.log(firebase);

  const handelSubmit =async (e) => {
    e.preventDefault();

    try {
    await firebase.signupEP(email,password) ;

   
    await firebase.putData("users/Datails", {
        email:email,
        firstname:fname,
        lastname:lname
    })

     window.location.href = "/"
     alert('signup complate')
    } catch (error) {
        
        console.log(error.message);
    }

  }

  return (
    <div className='w-full h-screen bg-white text-black flex items-center justify-center'>

        <div className='w-100 flex flex-col items-center justify-center gap-3 p-8 rounded-xl shadow-2xl'>
            <h1 className='text-2xl font-bold'>Sign Up</h1>
            <form onSubmit={handelSubmit} action="" className='flex flex-col w-full'>
                <div className='mb-3 flex flex-col gap-1'>
                  <label htmlFor="name">First name</label>
                <input
                 className='outline-none border border-gray-300 p-2 rounded-[10px]' type="text"
                  placeholder='first name' id='name'
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                   />
                </div>
               <div className='mb-3 flex flex-col gap-1'>
                 <label htmlFor="lname">Last name</label>
                <input
                 className='border border-gray-300 p-2 outline-none rounded-[10px]' type="text" placeholder='last name' id='lname' 
                 value={lname}
                  onChange={(e) => setLname(e.target.value)}
                 />
               </div>
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
               <button className='bg-orange-400 active:bg-orange-600 cursor-pointer  text-white px-3 py-1 rounded-xl' type='submit'> Sign Up</button>
               
            </form>
            <div className='text-xl font-bold'>OR</div>

            <button type='button' className='bg-orange-400 active:bg-orange-600 w-full cursor-pointer  text-white px-3 py-1 rounded-xl' onClick={firebase.signupGoogle}> Continue With google</button>
            <div className='flex items-center justify-end w-full'>
              <p className='text-[12px] text-zinc-400 '>Alredy registered <Link to="/login" className='text-blue-600 underline'>Login</Link></p>
            </div>
        </div>

    </div>
  )
}

export default Signup