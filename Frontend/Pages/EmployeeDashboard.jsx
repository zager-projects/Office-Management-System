import React, { useState } from 'react'
import DashboardNavbar from '../Components/DashboardNavbar'
import ApplyLeave from '../Components/ApplyLeave'
import Sidebar from '../Components/ESiderbar'

const EmployeeDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('')

  const handleSidebarClick = (component) => {
    setActiveComponent(component)
  }

  return (
    <>
      <DashboardNavbar first="Employee" second="Dashboard" />
      <div className="flex">
        <Sidebar onSidebarClick={handleSidebarClick} />
        <div className="flex-grow p-4 ml-64 mt-[10vh] h-[90vh] overflow-auto flex-1 justify-center items-start "> 
          {activeComponent === 'applyLeave' && <ApplyLeave />}
          {/* Add other components here as needed */}
        </div>
      </div>
    </>
  )
}

export default EmployeeDashboard
