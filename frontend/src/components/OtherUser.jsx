import React from 'react'
import { useDispatch,useSelector } from "react-redux";
import { setSelectedUser } from '../redux/userSlice';

const OtherUser = ({ user }) => {
    const dispatch = useDispatch();
    const {selectedUser, onlineUsers} = useSelector(store=>store.user);
    const isOnline = onlineUsers?.includes(user._id);
    const selectedUserHandler = (user) => {
        dispatch(setSelectedUser(user));
    }
    return (
        <div 
            onClick={() => selectedUserHandler(user)} 
            className={`
                flex items-center gap-4 p-4 my-1 rounded-lg cursor-pointer transition-all duration-300
                ${selectedUser?._id === user?._id 
                    ? 'bg-purple-600 text-white shadow-lg' 
                    : 'hover:bg-gray-700 text-gray-300'
                }
            `}
        >
            <div className={`avatar ${isOnline ? 'online' : ''}`}>
                <div className='w-12 h-12 rounded-full overflow-hidden'>
                    <img src={user?.profilePhoto} alt="user-profile" className="w-full h-full object-cover" />
                </div>
            </div>
            <div>
                <p className='font-semibold'>{user?.fullName}</p>
            </div>
        </div>
    )
}

export default OtherUser