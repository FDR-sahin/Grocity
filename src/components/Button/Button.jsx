import React from 'react'

function Button(props) {
  return (
    <button className='bg-gradient-to-b from-orange-300 to-orange-500 md:text-lg text-md text-white px-8 py-3 rounded-lg font-medium hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>
        {props.content}
    </button>
  )
}

export default Button