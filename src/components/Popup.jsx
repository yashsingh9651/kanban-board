import React, { useState,useContext} from 'react';
import {RiDeleteBinLine} from 'react-icons/ri';
import {GiCrossMark} from 'react-icons/gi';
import context from '../context/Context';
export const Popup = () => {
  // ? Context Api and Destructuring...
  const customContext= useContext(context);
  const {showPopup,editTask,removeTask,popDetails:{c_id,t_id,title,desc,urgent}} = customContext;
  // ? Setting title,description and comment during OnChange...
  const [data, setData] = useState({
    title:title,
    desc:desc,
    urgent:urgent
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
  const Change= () => {
    editTask(c_id,t_id,data.title,data.desc,data.urgent)
    showPopup()
  };
  return (
    <>
    <div className='w-full top-0 left-0 h-full absolute flex justify-center items-center bg-[#ccccccb1]'>
      <div className='w-[90vw] h-[90vh] md:h-[70vh] lg:w-[70vw] lg:h-[80vh] bg-white rounded p-5'>
        <div className='flex items-center justify-between text-2xl'>
                <RiDeleteBinLine className='cursor-pointer text-red-600' onClick={remove}/>
                <div className='flex items-center gap-2'>
                    <button className='bg-green-600 px-3 py-1 rounded hover:bg-green-500 text-white text-base' onClick={()=>{setData({...data,urgent:'urgent'})}}>Urgent</button>
                    <button className='bg-green-600 px-3 py-1 rounded hover:bg-green-500 text-white text-base' onClick={()=>{setData({...data,urgent:''})}}>Not Urgent</button>
                </div>
                <GiCrossMark className='cursor-pointer text-red-600' onClick={showPopup}/>
        </div>
        <h1 className='font-medium text-base md:text-2xl lg:text-base text-gray-500 mt-5'>Title</h1>
        <textarea style={{resize:'none'}} name='title' onChange={setDataDetails} value={data.title} className='text-lg md:text-3xl lg:text-xl font-medium mb-3 w-full outline-none border border-gray-400 rounded px-1'></textarea>
        {urgent&&<h1 className='bg-green-400 max-w-fit px-2 py-1 rounded-2xl text-xs mb-2'>Urgent</h1>}
        <h1 className='font-medium text-base md:text-2xl lg:text-base text-gray-500'>Description</h1>
        <textarea rows={10} onChange={setDataDetails} name="desc" style={{resize:'none'}} autoFocus className='w-full text-lg md:text-2xl lg:text-lg outline-none border border-gray-400 rounded px-1' type="text"  value={data.desc}/>
        <button className='bg-blue-600 px-3 py-1 rounded hover:bg-blue-500 text-white md:text-3xl lg:text-lg' onClick={Change}>Change</button>
      </div>
    </div>
    </>
  )
}
