import React from 'react';
import SendInput from './SendInput';
import Messages from './Messages';
import { useSelector } from "react-redux";

const MessageContainer = () => {
    const { selectedUser, authUser, onlineUsers } = useSelector(store => store.user);
    const isOnline = onlineUsers?.includes(selectedUser?._id);

    return (
        <div className='flex-1 flex flex-col bg-gray-900'>
            {selectedUser !== null ? (
                <>
                    <div className='flex items-center gap-4 bg-gray-800 text-white px-6 py-3 border-b border-gray-700'>
                        <div className={`avatar ${isOnline ? 'online' : ''}`}>
                            <div className='w-12 rounded-full'>
                                <img src={selectedUser?.profilePhoto} alt="user-profile" />
                            </div>
                        </div>
                        <div>
                            <p className='text-lg font-semibold'>{selectedUser?.fullName}</p>
                        </div>
                    </div>
                    <Messages />
                    <SendInput />
                </>
            ) : (
                <div className='flex-1 flex flex-col justify-center items-center text-center'>
                    <h1 className='text-5xl text-purple-400 font-bold mb-2'>Hi, {authUser?.fullName}</h1>
                    <h2 className='text-3xl text-gray-400'>Let's start a conversation</h2>
                </div>
            )}
        </div>
    );
};

export default MessageContainer;