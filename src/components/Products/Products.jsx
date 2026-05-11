import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList'
import Card from '../Cards/Card'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

function Products() {

  const catagorys = ['All','Fruits','Vegetables','Dairy','SeaFood']
  const [activeTav,setActiveTav] = useState('All')

  let filterItem = activeTav === 'All' ? ProductList : ProductList.filter(item => item.category ===activeTav);

  const renderCard = filterItem.slice(0,8).map(product => {
    return(
      <Card key={product.id} image = {product.image} title = {product.name} price = {product.price}/>
    )
  })

  return (
    <section>
        <div className='max-w-350 mx-auto px-10 py-20'>
            <Heading firstH= "Our" secondH="Products"/>

            <div className='flex flex-wrap gap-4 justify-center mt-8'>
              {
                catagorys.map(catagory => {
                  return(
                    <button key={catagory} className={`cursor-pointer py-2 px-5 text-lg rounded-lg ${activeTav === catagory ? 'bg-gradient-to-b from-orange-300 to-orange-500 text-white' : 'bg-zinc-100'}`} onClick={ () => setActiveTav(catagory)} >
                      {catagory}
                    </button>
                  )
                })
              }
            </div>
             
            <div className='grid md:grid-cols-4 grid-cols-1 gap-9 mt-20'>
              {renderCard}
            </div>

            <div className='text-center mt-15'>
              <Link to="/allproduct" className='bg-gradient-to-b from-orange-300 to-orange-500 md:text-lg text-md text-white px-8 py-3 rounded-lg font-medium hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>View All</Link>
            </div>
        </div>
    </section>
  )
}

export default Products

