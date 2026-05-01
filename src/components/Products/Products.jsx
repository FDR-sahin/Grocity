import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList'
import Card from '../Cards/Card'
import Button from '../Button/Button'

function Products() {

  const catagorys = ['All','Fruits','Vegetables','Dairy','SeaFood']
  const [activeTav,setActiveTav] = useState('All')

  let filterItem = activeTav === 'All' ? ProductList : ProductList.filter(item => item.category ===activeTav);

  const renderCard = filterItem.slice(0,8).map(product => {
    return(
      <Card image = {product.image} title = {product.name} price = {product.price}/>
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
              <Button content= 'View All'/>
            </div>
        </div>
    </section>
  )
}

export default Products

