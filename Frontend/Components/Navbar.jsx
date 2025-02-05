import React from 'react'
import { primaryColor, secondaryColor } from '../Constants/theme'
import { NavLink } from 'react-router-dom'
import Button from './Button'

function Navbar() {
  return (
    <>
    <div className='h-[10vh] flex items-center'>
        <p className='uppercase font-bold text-[2vw]'><span style={{color:secondaryColor}}>Office</span> management system</p>
        <div>
            <NavLink to='/register'>
                {/* <button style={{backgroundColor:secondaryColor}} className='text-white px-4 py-2 rounded-lg font-semibold'>Register</button> */}
                <Button value="Register"/>
            </NavLink>
        </div>
    </div>
    </>
  )
}

export default Navbar