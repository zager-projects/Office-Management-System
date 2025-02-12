import React, { useState } from 'react'
import { primaryColor } from '../Constants/theme';


function EmployeeManagement() {
    const [email, setEmail] = useState('');
    const [employeeData, setEmployeeData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false);
  
    const findEmployee = async (e) => {
      e.preventDefault();
      
      try {
        setLoading(true);
        setError(null);
  
        const response = await fetch(`http://localhost:5000/api/employee/find?email=${email}`);
        const data = await response.json();
  
        if (!response.ok) {
          throw new Error(data.message || 'Employee not found');
        }
  
        setEmployeeData(data.employee);
        setShowForm(true);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    if (showForm && employeeData) {
      return (
        <div className="w-full max-w-2xl mx-auto p-6">
          <button 
            onClick={() => {
              setShowForm(false);
              setEmployeeData(null);
              setEmail('');
            }}
            className="mb-6 text-blue-600 hover:text-blue-700"
          >
            ← Back to Search
          </button>
          
          {/* Your existing form component with employeeData */}
          <EmployeeForm employee={employeeData} />
        </div>
      );
    }


  return (
   <>
   <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-6 text-gray-800 ">Find Employee</h2>
      
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={findEmployee} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Employee Email ID
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter employee email"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            required
          />
        </div>

        <button
          type="submit"
          style={{backgroundColor: primaryColor}}
          disabled={loading || !email}
          className="w-full px-4 py-2 text-white rounded-mdfocus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Searching...' : 'Find Employee'}
        </button>
      </form>
    </div>
   </>
  )
}

export default EmployeeManagement