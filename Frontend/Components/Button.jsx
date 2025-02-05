import React from 'react'
import { primaryColor, secondaryColor } from '../Constants/theme'


function Button({value}) {
  return (
    <>
        <button style={{backgroundColor:secondaryColor}} className='text-white px-4 py-2 rounded-lg font-semibold'>{value}</button>
    </>
  )
}

export default Button