import React from 'react'
import DashboardNavbar from '../Components/DashboardNavbar'
import ApplyLeave from '../Components/ApplyLeave'

const EmployeeDashboard = () => {
  return (
    <>
    <DashboardNavbar first="Employee" second="Dashboard"/>
    <ApplyLeave />
    </>
  )
}

export default EmployeeDashboard