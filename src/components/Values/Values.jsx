import React from 'react'
import Heading from '../Heading/Heading'
import { IoIosHeart } from "react-icons/io";
import { FaLeaf, FaShieldAlt} from 'react-icons/fa';
import { FaSeedling } from "react-icons/fa";
import buslet from '../../assets/basket-full-vegetables.png'

function Values() {

  const renderValueLeft = value.slice(0,2).map(card => {
       return (
        <div className='flex md:flex-row-reverse items-center gap-5' key={card.id}>

          <div>
            <span className='flex justify-center items-center text-2xl text-white bg-gradient-to-b from-orange-300 to-orange-500 w-15 h-15 rounded-full '>{card.icon}</span>
          </div>

          <div className='md:text-right'>
              <h3 className='text-zinc-800 font-bold'>{card.title}</h3>
              <p className='text-zinc-600 mt-2'>{card.des}</p>
          </div>
        </div>
       )
  })
  
  const renderValueRight = value.slice(2,4).map(card => {
       return (
         <div className='flex items-center gap-5' key={card.id}>

          <div>
            <span className='flex justify-center items-center text-2xl text-white bg-gradient-to-b from-orange-300 to-orange-500 w-15 h-15 rounded-full '>{card.icon}</span>
          </div>

          <div className=''>
              <h3 className='text-zinc-800 font-bold'>{card.title}</h3>
              <p className='text-zinc-600 mt-2'>{card.des}</p>
          </div>
        </div>
       )
  })

  return (
    <section>
        <div className='max-w-350 mx-auto px-10'>
            <Heading firstH="Our" secondH="Values" />

            <div className='flex md:flex-row flex-col gap-5 mt-10'>

              <div className='md:min-h-100 gap-10 flex flex-col justify-between'>
                {renderValueLeft}
              </div>
              <div className='md:flex w-1/2 hidden'>
                <img  src={buslet} alt="" />
              </div>
              <div className='md:min-h-100 gap-10 flex flex-col justify-between'>
                {renderValueRight}
              </div>
            </div>
        </div>
    </section>
  )
}

export default Values

const value = [
  {
    id:1,
    title:'Trust',
    des:'It is a long established fact that a reader will be distracted by the readable.',
    icon:<IoIosHeart/>
  },
  {
    id:2,
    title:'Always Fresh',
    des:'It is a long established fact that a reader will be distracted by the readable.',
    icon:<FaLeaf/>
  },
  {
    id:3,
    title:'Food Safety',
    des:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon:<FaSeedling/>
  },
  {
    id:4,
    title:'100% Organic',
    des:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon:<FaShieldAlt/>
  },
]