import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import { primaryColor, secondaryColor } from '../Constants/theme';



function Login() {
    const [role, setRole] = useState('');
    const [logginguser, setLoggingUser] = useState('');
    const [formData, setFormData] = useState({
        id: '',
        password: '',
        role: ''
      });
    const navigate = useNavigate();
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
      };

    const handleRoleChange = (e) => {
        setRole(e.target.value);
        setLoggingUser(role);
        handleNavigation(e.target.value);
    }

      const handleNavigation =(selectedrole)=>{
        if(selectedrole==='admin'){
            navigate('/admin-login')
        }
        else if(selectedrole==='employee'){
            navigate('/employee-login')
        }
        else if(selectedrole==='manager'){
            navigate('/manager-login')
      }
    }
  return (
    <>
        <div className='h-[10vh] flex items-center justify-between px-10'>        
        {/* <p className='uppercase font-bold text-[2vw]'><span style={{color:secondaryColor}}>Office</span> management system</p> */}
        <p className='uppercase font-bold text-3xl'><span style={{color:secondaryColor}}>O</span>ms <span style={{color:secondaryColor}}>l</span>ogin</p>
        <div className='flex md:gap-4 gap-2'>
            <NavLink to='/register'>
                <Button value="Register"/>
            </NavLink>
        </div>
        </div>
        <div className="flex min-h-[90vh] items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              value={role}
            //   onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            onChange={handleRoleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="">Select your role</option>
              <option value="admin">Admin</option>
              <option value="employee">Employee</option>
              <option value="manager">Manager</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {logginguser}ID
            </label>
            <input
              type="text"
              placeholder="Enter your ID"
              value={formData.id}
              onChange={(e) => setFormData({ ...formData, id: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <button
            type="submit"
            style={{ backgroundColor: primaryColor }}
            className="w-full  text-white py-2 px-4 rounded-md hover:opacity-90 hover:cursor-pointer  focus:outline-none focus:ring-2 focus:ring-purple-400 mt-6">
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login