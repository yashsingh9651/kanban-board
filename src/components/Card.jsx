import React,{useContext, useState} from 'react';
import context from '../context/Context';
import { Task } from './Task';
export const Card = ({card}) => {
  const {title,tasks,id} = card;
  // ? expanding adding task component...
  const [showtask, setShowtask] = useState(false);
  // ? Context Api ..
  const customContext = useContext(context);
  const {newTaskTitle,setNewTaskTitle,addTask}= customContext;
  // ? Calling the function to add a new task...
  const call = () => {
    if(newTaskTitle!==''){
      addTask(newTaskTitle,id)
      setShowtask(false);
    }
    setNewTaskTitle('');
  };
  return (
    <>
    <div className='bg-gray-200 w-full p-2 mt-3 lg:mt-0 md:min-h-[250px] md:max-h-[400px] lg:min-h-[400px] lg:max-h-[550px] overflow-y-auto custom'>
        <h1 className='uppercase text-sm font-medium mt-2 text-gray-500'>{title} - {tasks.length}</h1>
        {tasks.map(task => {
         return <Task key={task.id} task={task} c_id={id}/>
        })}
        {/* Add new task... */}
        {!showtask?<div className='w-full bg-white rounded p-2 mt-2 md:text-xl lg:text-base shadow-[1px_1px_0_0_rgba(0,0,0,0.2)] hover:bg-gray-100' onClick={()=>{setShowtask(!showtask)}}>Add Task</div>
        :
        <div className='w-full md:text-xl lg:text-base bg-white rounded p-2 mt-2 shadow-[1px_1px_0_0_rgba(0,0,0,0.2)] hover:bg-gray-100'>
          <div><textarea value={newTaskTitle} onChange={(e)=>{setNewTaskTitle(e.target.value)}} name="task" placeholder='Enter Title' className='w-full rounded border border-gray-400 p-1' style={{resize:'none'}} autoFocus></textarea></div>
          <button onClick={call} className='bg-blue-600 px-3 py-1 rounded hover:bg-blue-500 text-white mr-2'>Save</button>
          <button onClick={()=>{setShowtask(false)}} className='px-3 py-1 rounded bg-gray-200 hover:bg-gray-400'>Cancel</button>
        </div>}
    </div>
    </>
  )
}
