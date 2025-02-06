import { Route, Routes } from 'react-router-dom'
import AdminLogin from '../Pages/AdminLogin'
import EmployeeLogin from '../Pages/EmployeeLogin'
import HomePage from '../Pages/HomePage'
import Login from '../Pages/Login'
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
      </Routes>
    </>
  )
}

export default App
