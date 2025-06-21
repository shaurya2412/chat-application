import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from '../redux/userSlice';
import AuthLayout from './AuthLayout';

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5000/api/v1/user/login`, {
        username: user.email,
        password: user.password
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      navigate("/");
      dispatch(setAuthUser(res.data));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      email: "",
      password: ""
    });
  }

  return (
    <AuthLayout>
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <div className="flex justify-center mb-8">
          <div className="w-1/2">
            <button className="w-full py-3 px-4 border-b-4 border-purple-600 font-bold text-lg text-purple-800">Login</button>
          </div>
          <div className="w-1/2">
            <Link to="/signup" className="w-full py-3 px-4 text-gray-500 font-bold text-lg text-center block hover:text-purple-800 transition">Register</Link>
          </div>
        </div>
        <h2 className="text-3xl font-light text-center text-gray-800 mb-8">Let's login to your account.</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className='appearance-none border-b-2 w-full py-3 px-3 text-black leading-tight focus:outline-none focus:border-purple-500'
              type="email"
              placeholder='Example@gmail.com'
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
              placeholder='Enter your password'
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-sm">Remember me</span>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className='w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300'>
              Login
            </button>
          </div>
          <p className='text-center my-6'>
            Don't have an account? <Link to="/signup" className="text-purple-600 hover:text-purple-800 font-semibold">Register</Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Login