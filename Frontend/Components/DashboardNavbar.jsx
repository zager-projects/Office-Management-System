import React from 'react'
import { primaryColor,secondaryColor } from '../Constants/theme'

function DashboardNavbar({first,second}) {
  return (
    <>
    {/* <div className='h-[10vh] flex items-center justify-between px-10 bg-red-50'>         */}
            {/* <p className='uppercase font-bold text-[2vw]'><span style={{color:secondaryColor}}>Office</span> management system</p> */}
        <p className='uppercase font-bold text-3xl'><span style={{color:secondaryColor}}>{first}</span>{second}</p>
    {/* </div> */}
    </>
  )
}

export default DashboardNavbar