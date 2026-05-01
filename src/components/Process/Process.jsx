import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled } from "react-icons/tb";
import { TbCircleNumber3Filled } from "react-icons/tb";
import { TbCircleNumber4Filled } from "react-icons/tb";
import { PiPlant } from "react-icons/pi";
import { TbBuildingFactory2 } from "react-icons/tb";
import { SlBadge } from "react-icons/sl";
import { CiDeliveryTruck } from "react-icons/ci";

function Process() {

  const renderSteps = steps.map(step => {
    return(
        <div className={`flex-1 basis-[300px] ${step.id % 2 == 0 ? 'md:-mt-50' : ''}`} key={step.id}>
           <span className='flex items-center justify-center text-8xl w-18 h-18 mx-auto bg-zinc-800 rounded-full text-white outline-[3px] outline-dashed outline-offset-7 outline-zinc-800'>{step.number}</span>
           <div className='flex justify-center items-center gap-5 mt-10'>  
                <span className='flex justify-center items-center bg-gradient-to-b from-orange-300 to-orange-500 text-white text-3xl h-15 w-15 rounded-full'>{step.icon}</span>
               <div className='flex-1'>
                <h3 className='text-2xl text-zinc-800 font-bold'>{step.title}</h3>
                <p className='text-zinc-600 mt-2'>{step.para}</p>
               </div>
           </div>

        </div>
    )
  })

  return (
    <section>
        <div className='max-w-350 mx-auto px-10 py-20'>
            <div className=' w-fit'>
                 <Heading firstH='Our' secondH='Process'/>
            </div>

            <div className='flex flex-wrap md:mt-20 mt-10 gap-5 md:pt-50'>
                {renderSteps}
            </div>
            
        </div>
    </section>
  )
}

export default Process

const steps = [
    {
        id:1,
        number:<TbCircleNumber1Filled />,
        title:'Sourcing',
        para:'It is a long established fact that a reader',
        icon:<PiPlant />
    },
    {
        id:2,
        number: <TbCircleNumber2Filled />,
        title:'Manufacturing',
        para:'It is a long established fact that a reader',
        icon:<TbBuildingFactory2 />
    },
    {
        id:3,
        number:<TbCircleNumber3Filled />,
        title:'Quality Control',
        para:'It is a long established fact that a reader',
        icon:<SlBadge />
    },
    {
        id:4,
        number:<TbCircleNumber4Filled />,
        title:'Logistics',
        para:'It is a long established fact that a reader',
        icon:<CiDeliveryTruck />
    },
]