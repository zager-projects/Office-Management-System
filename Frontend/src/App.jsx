import { Route, Routes } from 'react-router-dom'
import AdminDashboard from '../Pages/AdminDashboard'
import AdminLogin from '../Pages/AdminLogin'
import EmployeeAddForm from '../Pages/EmployeeAddFrom'
import EmployeeDashboard from '../Pages/EmployeeDashboard'
import EmployeeLogin from '../Pages/EmployeeLogin'
import HomePage from '../Pages/HomePage'
import Login from '../Pages/Login'
import ManagerDashboard from '../Pages/ManagerDashboard'
import ManagerLogin from '../Pages/ManagerLogin'
import Register from '../Pages/Register'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/manager-login" element={<ManagerLogin />} />
        <Route path="/employee-login" element={<EmployeeLogin />} />
        {/* <Route path="/admin" element={<AdminDashboard />} /> */}
        {/* <Route path="/employeeaddform" element={<EmployeeAddForm />} /> */}
        <Route path="/admin/*" element={<AdminDashboard />} />
        {/* <Route path="/admindashboard" element={<AdminDashboard />} /> */}
        <Route path="/employeeaddform" element={<EmployeeAddForm />} />
        <Route path="/employeedashboard/*" element={<EmployeeDashboard />} />
        <Route path="/manager-dashboard/*" element={<ManagerDashboard/>} />
      </Routes>
    </>
  )
}

export default App
