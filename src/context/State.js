import React, { useState,useEffect } from "react";
import Context from "./Context";
import {cardsData} from '../Data/Cards'
const State = (props) => {
  const [cards, setCards] = useState(JSON.parse(localStorage.getItem('kanban'))||cardsData);
  const [alert, setAlert] = useState(true)
  const [newTaskTitle, setNewTaskTitle] = useState('');
  // ? Adding new task...
  const addTask = (newTaskTitle,c_id) => {
    const newTask = {
      id:Date.now() + Math.random(),
      title:newTaskTitle
    }
    const index = cards.findIndex((item)=> item.id === c_id);
    const tempCards = [...cards];
    tempCards[index].tasks.push(newTask);
    setCards(tempCards);
  }
  // ? removing task...
  const removeTask = (c_id,t_id) => {
    const index = cards.findIndex((item)=> item.id === c_id);
    const tempCards = [...cards];
    const taskIndex = tempCards[index].tasks.findIndex((item)=> item.id === t_id);
    tempCards[index].tasks.splice(taskIndex, 1);
    setCards(tempCards);
  };
  // ? Toggle Popup ...
  const [popup, setPopup] = useState(false);
  const showPopup = () => {
    setPopup(!popup);
  };
  // ? Edit Task ...
  const editTask = (c_id,t_id,title,desc,urgent) => {
    const index = cards.findIndex((item) => item.id === c_id);
    const tempCards = [...cards];
    const taskIndex = tempCards[index].tasks.findIndex((item) => item.id ===t_id);
    tempCards[index].tasks[taskIndex].title = title;
    tempCards[index].tasks[taskIndex].desc = desc;
    tempCards[index].tasks[taskIndex].urgent = urgent;
  }
  // ? Getting Task Details from task component to send it to Popup component...
  const [popDetails, setPopDetdetails] = useState({c_id:'',t_id:'',title:'',desc:'',urgent:''});
  // ? Dragging Task from 1 card to another card...
  const [targetId,setTargetId] = useState({cid:'',tid:''});
  const addingOnDrag = (s_c_id,s_t_id) => {
    const tempCards = [...cards];
    const index = cards.findIndex((item)=> item.id === s_c_id);
    const taskIndex = tempCards[index].tasks.findIndex((itema)=> itema.id === s_t_id);
    const targetIndex = cards.findIndex((itemb)=>itemb.id ===targetId.cid);
    const targetTaskIndex = tempCards[targetIndex].tasks.findIndex((itemc)=> itemc.id === targetId.tid);
    const draggedTask = tempCards[index].tasks[taskIndex];
    tempCards[index].tasks.splice(taskIndex, 1);
    tempCards[targetIndex].tasks.splice(targetTaskIndex,0,draggedTask);
    setCards(tempCards);
  };
  useEffect(() => {
    localStorage.setItem('kanban',JSON.stringify(cards));
  }, [cards,setCards]);
  return (
    <Context.Provider value={{popup,setTargetId,alert,setAlert,addingOnDrag,showPopup,cards,newTaskTitle,setNewTaskTitle,addTask,removeTask,editTask,popDetails,setPopDetdetails}}>
      {props.children}
    </Context.Provider>
  );
};
export default State;
