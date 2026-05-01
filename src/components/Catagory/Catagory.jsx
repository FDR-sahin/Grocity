import React from 'react'
import Heading from '../Heading/Heading'
import fruth from '../../assets/fruits-and-veggies.png'
import daity from '../../assets/dairy-and-eggs.png'
import sea from '../../assets/meat-and-seafood.png'
import Button from '../Button/Button'

function Catagory() {

  const renderCards = catagory.map(card => {
    return (
        <div className='flex-1 basis-75' key={card.id}>
            <div className=' w-full min-h-[20vh] relative -mb-10'>
                <img className='absolute bottom-0 ' src={card.image} alt="" />
            </div>
            <div className='bg-zinc-100 pt-17 p-8 rounded-xl '>
                <h1 className='text-3xl font-bold text-zinc-800'>{card.title}</h1>
                <p className='text-zinc-600 mt-3 mb-4'>{card.para}</p>
                <a href="#" className='bg-gradient-to-b from-orange-300 to-orange-500 md:text-lg text-md text-white px-8 py-3 rounded-lg font-medium hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>See All</a>
            </div>
        </div>
    )
  })

  return (
    <section>
        <div className='py-20 max-w-350 mx-auto px-10'>
           <Heading firstH = "Shop" secondH = "By Catagory"/>

           <div className='flex flex-wrap gap-10 md:mt-15 mt-7'>
            {renderCards}
           </div>
        </div>
    </section>
  )
}

export default Catagory

const catagory = [
    {
       id:1,
       title:'Fruits & Veggies',
       para:'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
       image: fruth,
    },
    {
       id:2,
       title:'Dairy & Eggs',
       para:'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
       image: daity,
    },
    {
       id:3,
       title:'Meat & SeaFood',
       para:'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
       image: sea,
    }
]