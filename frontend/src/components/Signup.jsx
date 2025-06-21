import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import AuthLayout from './AuthLayout';

const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();

  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5000/api/v1/user/register`, user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  }

  return (
    <AuthLayout>
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <div className="flex justify-center mb-8">
          <div className="w-1/2">
            <Link to="/login" className="w-full py-3 px-4 text-gray-500 font-bold text-lg text-center block hover:text-purple-800 transition">Login</Link>
          </div>
          <div className="w-1/2">
            <button className="w-full py-3 px-4 border-b-4 border-purple-600 font-bold text-lg text-purple-800">Register</button>
          </div>
        </div>
        <h2 className="text-3xl font-light text-center text-gray-800 mb-8">Create your account.</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              id="fullName"
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              className='appearance-none border-b-2 w-full py-3 px-3 text-black leading-tight focus:outline-none focus:border-purple-500'
              type="text"
              placeholder='Full Name'
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Email
            </label>
            <input
              id="username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className='appearance-none border-b-2 w-full py-3 px-3 text-black leading-tight focus:outline-none focus:border-purple-500'
              type="text"
              placeholder='Email'
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className='appearance-none border-b-2 w-full py-3 px-3 text-black leading-tight focus:outline-none focus:border-purple-500'
              type="password"
              placeholder='Password'
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              value={user.confirmPassword}
              onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
              className='appearance-none border-b-2 w-full py-3 px-3 text-black leading-tight focus:outline-none focus:border-purple-500'
              type="password"
              placeholder='Confirm Password'
            />
          </div>
          <div className='flex items-center my-4'>
            <label className="flex items-center mr-4">
              <input
                type="checkbox"
                checked={user.gender === "male"}
                onChange={() => handleCheckbox("male")}
                className="form-checkbox"
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={user.gender === "female"}
                onChange={() => handleCheckbox("female")}
                className="form-checkbox"
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className='w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300'>
              Register
            </button>
          </div>
          <p className='text-center my-6'>
            Already have an account? <Link to="/login" className="text-purple-600 hover:text-purple-800 font-semibold">Login</Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
}

export default Signup;