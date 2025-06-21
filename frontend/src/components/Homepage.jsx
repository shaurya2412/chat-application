import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const { authUser } = useSelector(store => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, [authUser, navigate]);
  return (
    <div className='flex flex-col h-screen bg-gray-900 text-white'>
      <header className='bg-gray-800 shadow-md p-4'>
        <h1 className='text-3xl font-bold text-purple-400'>BlinkChat</h1>
      </header>
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  )
}

export default HomePage