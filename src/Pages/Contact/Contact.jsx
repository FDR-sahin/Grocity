import React from 'react'


import phone from '../../assets/phone.png'
import mail from '../../assets/mail.png'
import Button from '../../components/Button/Button'

function Contact() {
  return (
     <div>
        <div className='max-w-350 mx-auto px-10 my-30'>
            <h1 className='text-[14px] '><span className='text-black/50'> Home </span>/ <strong>Contact</strong></h1>
            <div  className='md:flex md:flex-row flex-col items-center justify-between py-20'>
                <div className='w-85 h-114.25 shadow md:p-7 p-4 flex flex-col gap-8 rounded'>
                    <div>
                        <div className='flex items-center gap-5 py-4'>
                            <img src={phone} alt="" />
                            <h2 className='text-4 font-bold'>Call To Us</h2>
                        </div>
                        
                        <p className='pt-1 text-4 text-black/80'>We are available 24/7, 7 days a week. </p>
                        <p className='pt-1 text-4 text-black/80'>Phone: +8801611112222</p>
                    </div>
                    <div className='border border-black/50'></div>
                    <div>
                        <div className='flex items-center gap-5 py-4'>
                            <img src={mail} alt="" />
                            <h2 className='text-4 font-bold'>Write To Us</h2>
                        </div>
                       
                        <p className='pt-1 text-4 text-black/80'>Fill out our form and we will contact you within 24 hours.</p>
                        <p className='pt-1 text-4 text-black/80'>Emails: customer@exclusive.com</p>
                        <p className='pt-1 text-4 text-black/80'>Emails: support@exclusive.com</p>
                    </div>
                </div>
                <div className='md:w-200 w-85 md:h-114.25 h-100 shadow md:p-5 p-3 rounded'>
                    <div className='md:flex md:flex-row flex-col md:w-full w-[320px]  items-center justify-between pb-8'>
                        <div className='bg-[#F5F5F5] p-2 rounded md:my-0 my-2'>
                            <input className='focus:outline-none' type="text" placeholder='Your Name ' />
                        </div>
                        <div className='bg-[#F5F5F5] p-2 rounded md:my-0 my-2'>
                            <input className='focus:outline-none' type="text" placeholder='Your Email ' />
                        </div>
                        <div className='bg-[#F5F5F5] p-2 rounded md:my-0 my-2'>
                            <input className='focus:outline-none' type="text" placeholder='Your Phone * ' />
                        </div>
                    </div>
                    <div>
                        <textarea className='bg-[#F5F5F5] p-2 rounded md:w-184.25 w-[320px] md:h-51.75 h-30'  name="" id="" placeholder='Your Massage'></textarea>
                    </div>

                    <div className='flex items-end justify-end md:pt-12 pt-3'>
                        <Button content = "Sent Message"/>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact