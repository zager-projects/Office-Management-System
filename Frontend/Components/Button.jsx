import React from 'react'
import { primaryColor, secondaryColor } from '../Constants/theme'


function Button({value,onClick}) {
  return (
    <>
        <button onClick={onClick} style={{backgroundColor:primaryColor}} className='text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 hover:cursor-pointer md:px-4 md:py-2  md:text-base transition-all duration-200 active:scale-95'>{value}</button>
    </>
  )
}

export default Button