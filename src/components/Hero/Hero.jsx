import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'

function Hero() {
  return (
    <section>
        <div className='min-h-screen max-w-350 mx-auto px-10 flex md:flex-row flex-col items-center md:pt-25 pt-30'>
            {/* hero content */}
            <div className='flex-1'>
                <span className='bg-orange-100 text-lg text-orange-500 px-5 py-2 rounded-full'>Export Best Quality...</span>
                <h1 className='md:text-7xl/20 text-5xl/14 mt-4 font-bold'>
                    Testy Orgranic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span><br /> In Your City
                </h1>
                <p className='text-zinc-600 md:text-lg text-md max-w-132.5 mt-5 mb-10'>
                    Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                </p>
                <Button content = "Shop Now" />
            </div>

             {/* hero img */}
            <div className='flex-1'>
                <img src={Grocery} alt="hero img" />
            </div>
        </div>
    </section>
    // <section>
    //     <div className='max-w-350 mx-auto px-10 flex items-center gap-2 h-screen'>
    //          <div className='flex-1 '> 
    //             <span className='inline-block bg-orange-100 px-3 py-2 text-lg text-orange-500 rounded-full'>Export Best Qua...</span>
    //             <h1 className='mt-3 text-7xl/20 font-bold'>Lorem ipsum, <span className='text-orange-500'> dolor</span>  sit amet. <span  className='text-orange-500'>Voluptatum</span>, veniam?</h1>
    //             <p className='text-lg text-zinc-800 my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius excepturi perferendis incidunt doloribus, alias temporibus rerum itaque!</p>
    //             <Button content="dhope now" />
    //          </div>
    //          <div className='flex-1'>
    //             <img src={Grocery} alt="" />
    //          </div>
    //     </div>
    // </section>
  )
}

export default Hero