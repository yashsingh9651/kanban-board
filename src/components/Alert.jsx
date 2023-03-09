import React,{useContext} from 'react';
import {GiCrossMark} from 'react-icons/gi';
import context from '../context/Context';
export const Alert = () => {
  const customContext= useContext(context);
  const {alert,setAlert}=customContext;
  return (
    <>
    {alert&&<div className='w-full top-0 left-0 h-full absolute flex justify-center items-center bg-[#ccccccb1] lg:hidden'>
      <div className='relative w-[90vw] h-[90vh] md:h-[70vh] lg:w-[70vw] lg:h-[80vh] bg-white rounded p-5 flex items-center'>
        <h1 className='text-3xl text-center p-5'>This website is created for Tasks Management of Projects for large screen. So to take all benefits switch to PC or Laptop.</h1>
        <GiCrossMark className='absolute top-10 right-10 text-4xl' onClick={()=>{setAlert(false)}}/>
      </div>
    </div>}
    </>
  )
};
