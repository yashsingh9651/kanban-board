import React, { useState,useContext} from 'react';
import {RiDeleteBinLine} from 'react-icons/ri';
import {GiCrossMark} from 'react-icons/gi';
import context from '../context/Context';
export const Popup = () => {
  // ? Context Api and Destructuring...
  const customContext= useContext(context);
  const {showPopup,editTask,removeTask,popDetails:{c_id,t_id,title,desc}} = customContext;
  // ? Setting title,description and comment during OnChange...
  const [data, setData] = useState({
    title:title,
    description:desc
  });
  let names,value;
  const setDataDetails = (event) => {
    names=event.target.name;
    value=event.target.value;
    setData({...data,[names]:value})
  };
  // ? Removing Task...
  const remove = () => {
    showPopup();
    removeTask(c_id,t_id);
  };
  return (
    <>
    <div className='w-full top-0 left-0 h-full absolute flex justify-center items-center bg-[#ccccccb1]'>
      <div className='w-[70vw] h-[80vh] bg-white rounded p-5'>
        <div className='flex items-center justify-between text-2xl'>
                <RiDeleteBinLine className='cursor-pointer' onClick={remove}/>
                <GiCrossMark className='cursor-pointer' onClick={showPopup}/>
        </div>
        <h1 className='font-medium text-base text-gray-500 mt-5'>Title</h1>
        <textarea style={{resize:'none'}} name='title' onChange={setDataDetails} value={data.title} className='text-xl font-medium mb-5 w-full outline-none border border-gray-400 rounded px-1'></textarea>
        <h1 className='font-medium text-base text-gray-500'>Description</h1>
        <textarea rows={10} onChange={setDataDetails} name="description" style={{resize:'none'}} autoFocus className='w-full text-lg outline-none border border-gray-400 rounded px-1' type="text"  value={data.description}/>
        <button className='bg-blue-600 px-3 py-1 rounded hover:bg-blue-500 text-white' onClick={()=>{editTask(c_id,t_id,data.title,data.description)}}>Change</button>
      </div>
    </div>
    </>
  )
}
