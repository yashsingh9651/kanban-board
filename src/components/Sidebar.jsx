import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import {AiFillProject,AiOutlineSetting} from 'react-icons/ai';
import {TfiBlackboard} from 'react-icons/tfi';
export const Sidebar = () => {
    const location = useLocation();
  return (
    <div className='md:w-[30vw] lg:w-[15vw] bg-gray-200 p-5 hidden md:block'>
        <div className='flex items-center'>
            <AiFillProject className='text-6xl text-orange-600'/>
            <div>
            <h1 className='text-base font-medium'>Alpha 1.0</h1>
            <h1 className='text-sm text-gray-500'>Web Development</h1>
            </div>
        </div>
        <div className={`flex items-center gap-4 p-3 text-lg my-5 rounded-lg ${location.pathname==='/'&&"bg-gray-300 text-blue-600"}`}>
            <TfiBlackboard/>
            <Link to='/'>Kanban Board</Link>
        </div>
        <div className={`flex items-center gap-4 p-3 text-lg my-5 rounded-lg ${location.pathname==='/setting'&&"bg-gray-300 text-blue-600"}`}>
            <AiOutlineSetting/>
            <Link to='/'>Project Setting</Link>
        </div>
    </div>
  )
}
