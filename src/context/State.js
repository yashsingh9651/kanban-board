import React, { useState } from "react";
import Context from "./Context";
const State = (props) => {
  const [cards, setCards] = useState([
    {
      id: Date.now() + Math.random() * 50,
      title: "backlog",
      tasks: [
        {
          id: Date.now() + Math.random(),
          title: "Task-1 of backlog Card",
          desc:"Description of Task-1 of Backlog Card"
        },
        {
          id: Date.now() + Math.random(),
          title: "Task-2 of backlog Card",
          desc:"Description of Task-2 of Backlog Card"
        }
      ],
    },
    {
      id: Date.now() + Math.random() * 50,
      title: "todo",
      tasks: [
        {
          id: Date.now() + Math.random(),
          title: "Task-1 of Todo Card",
          desc:"Description of Task-1 of Todo Card"
        },
        {
          id: Date.now() + Math.random(),
          title: "Task-2 of Todo Card",
          desc:"Description of Task-2 of Todo Card"
        },
        {
          id: Date.now() + Math.random(),
          title: "Task-3 of Todo Card",
          desc:"Description of Task-3 of Todo Card"
        },
      ],
    },
    {
      id: Date.now() + Math.random() * 50,
      title: "In progress",
      tasks: [
        {
          id: Date.now() + Math.random(),
          title: "Task-1 of In Progress Card",
          desc:"Description of Task-1 of In Progress Card"
        }
      ],
    },
    {
      id: Date.now() + Math.random() * 50,
      title: "completed",
      tasks: [
        {
          id: Date.now() + Math.random(),
          title: "Task-1 of Completed Card",
          desc:"Description of Task-1 of Completed Card"
        },
        {
          id: Date.now() + Math.random(),
          title: "Task-2 of Completed Card",
          desc:"Description of Task-2 of Completed Card"
        }
      ],
    },
  ]);
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
  const editTask = (c_id,t_id,title,desc) => {
    const index = cards.findIndex((item) => item.id === c_id);
    const tempCards = [...cards];
    const taskIndex = tempCards[index].tasks.findIndex((item) => item.id ===t_id);
    tempCards[index].tasks[taskIndex].title = title;
    tempCards[index].tasks[taskIndex].desc = desc;
  }
  // ? Popup Details...
  const [popDetails, setPopDetdetails] = useState({c_id:'',t_id:'',title:'',desc:''})
  return (
    <Context.Provider value={{popup,showPopup,cards,newTaskTitle,setNewTaskTitle,addTask,removeTask,editTask,popDetails,setPopDetdetails}}>
      {props.children}
    </Context.Provider>
  );
};
export default State;
