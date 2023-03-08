import React,{useContext} from 'react';
import {AiTwotoneDelete} from 'react-icons/ai';
import {FiMoreVertical} from 'react-icons/fi';
import context from '../context/Context'
export const Task = ({task,c_id}) => {
  // ? Context Api and  Destructuring...
  const customContext = useContext(context);
  const {showPopup,removeTask,setPopDetdetails} = customContext;
  // ? Removing the task...
  const remove = () => {
    removeTask(c_id,task.id);
  };
  // ? Sending Details... to State then state send it to Popup Component...
  const send = () => {
    showPopup();
    setPopDetdetails({c_id:c_id,t_id:task.id,title:task.title,desc:task.desc});
  }
  return (
    <>
    <div className='show w-full bg-white rounded p-2 mt-2 shadow-[1px_1px_0_0_rgba(0,0,0,0.2)] hover:bg-gray-100'>
        <div className="flex justify-between">
          <h1 className='w-11/12'>{task.title}</h1>
          <FiMoreVertical className='customOpa cursor-pointer  opacity-0' onClick={send}/>
        </div>
        <div className="flex justify-end mt-2">
            <AiTwotoneDelete onClick={remove} className='customOpa text-red-700 cursor-pointer opacity-0'/>
        </div>
    </div>
    </>
  )
}
