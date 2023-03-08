import React, { useContext } from 'react'
import context from '../context/Context';
import { Card } from './Card'
import { Popup } from './Popup'
export const Board = () => {
  const customContext = useContext(context);
  const {popup,cards} = customContext;
  return (
    <>
    <div className='w-[85vw] p-5'>
      <h1 className='text-gray-500'>Projects &nbsp;/&nbsp; Alpha 1.0 &nbsp;/&nbsp; Kanban Board</h1>
      <h1 className='text-2xl font-semibold my-2'>Kanban Board</h1>
      <div className='w-full flex gap-4'>
        {cards.map(card=>{
          return <Card key={card.id} card={card} />
        })}
      </div>
    </div>
    {popup&&<Popup/>}
    </>
  )
};
