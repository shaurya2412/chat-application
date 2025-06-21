import React, { useState } from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from './OtherUsers';
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { setAuthUser, setOtherUsers, setSelectedUser } from '../redux/userSlice';
import { setMessages } from '../redux/messageSlice';
import { BASE_URL } from '..';
 
const Sidebar = () => {
    const [search, setSearch] = useState("");
    const {otherUsers} = useSelector(store=>store.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/v1/user/logout`);
            navigate("/login");
            toast.success(res.data.message);
            dispatch(setAuthUser(null));
            dispatch(setMessages(null));
            dispatch(setOtherUsers(null));
            dispatch(setSelectedUser(null));
        } catch (error) {
            console.log(error);
        }
    }
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        const conversationUser = otherUsers?.find((user)=> user.fullName.toLowerCase().includes(search.toLowerCase()));
        if(conversationUser){
            dispatch(setOtherUsers([conversationUser]));
        }else{
            toast.error("User not found!");
        }
    }
    return (
        <div className='w-1/4 bg-gray-800 p-4 flex flex-col'>
            <form onSubmit={searchSubmitHandler} className='flex items-center gap-2 mb-4'>
                <input
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    className='input input-bordered rounded-lg w-full bg-gray-700 text-white' type="text"
                    placeholder='Search...'
                />
                <button type='submit' className='btn btn-circle bg-purple-500 text-white'>
                    <BiSearchAlt2 className='w-6 h-6 outline-none'/>
                </button>
            </form>
            <div className="border-t border-gray-700 flex-1 overflow-y-auto">
                <OtherUsers/>
            </div>
            <div className='mt-4'>
                <button onClick={logoutHandler} className='btn btn-sm btn-outline btn-error w-full'>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar