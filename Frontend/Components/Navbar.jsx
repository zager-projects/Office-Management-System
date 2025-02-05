import React from 'react'
import { primaryColor, secondaryColor } from '../Constants/theme'
import { NavLink } from 'react-router-dom'
import Button from './Button'

function Navbar() {
  return (
    <>
    <div className='h-[10vh] flex items-center justify-between px-10'> 



        
        {/* <p className='uppercase font-bold text-[2vw]'><span style={{color:secondaryColor}}>Office</span> management system</p> */}
        <p className='uppercase font-bold text-3xl'><span style={{color:secondaryColor}}>O</span>ms</p>
        <div className='flex md:gap-4 gap-2'>
            <NavLink to='/register'>
                <Button value="Register"/>
            </NavLink>
            <NavLink to='/login'>
                <Button value="Login"/>
            </NavLink>
        </div>
    </div>
    </>
  )
}

export default Navbar