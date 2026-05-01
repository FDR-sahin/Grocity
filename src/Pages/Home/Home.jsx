import React from 'react'
// import Navber from "../../components/Navber/Navber"
// import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Catagory from '../../components/Catagory/Catagory'
import Values from '../../components/Values/Values'
import Products from '../../components/Products/Products'
import Discound from '../../components/Discound/Discound'
import Process from '../../components/Process/Process'
import Testimonials from '../../components/Testimonials/Testimonials'



function Home() {
  return (
    <div>
       {/* <Navber/> */}
       <Hero/>
       <Catagory/>
       <Values/>
       <Products/>
       <Discound/>
       <Process/>
       <Testimonials/>
       {/* <Footer/> */}
    </div>
  )
}

export default Home