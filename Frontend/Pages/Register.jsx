import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import { primaryColor, secondaryColor } from '../Constants/theme';
import axios from 'axios'


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

     try { 
      await axios.post('http://localhost:3000/api/admin/register',{username,password,email}) 
      alert("Registration Sucessful");
      navigate('/login');
    } catch (error) {
      alert("Registration failed")
      console.log(error)
    }
  };

  return (
    <>
    <div className='navbar-Register-page'>
        <div className='h-[10vh] flex items-center justify-between px-10'> 
        <p className='uppercase font-bold text-3xl'><span style={{color:secondaryColor}}>O</span>ms <span style={{color:secondaryColor}}>R</span>egister</p>
        <div className='flex md:gap-4 gap-2'>
        <NavLink to='/login'>
        <Button value="Login"/>
        </NavLink>
        </div>
        </div>
    </div>
    <div className="flex items-center justify-center  bg-gray-100 h-[90vh]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <button
            type="submit"
            style={{backgroundColor:primaryColor}}
            className="w-full py-2 mt-4 text-white  rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer"
            >
            Register
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Register;