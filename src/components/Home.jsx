import React from 'react';
import { Alert } from './Alert';
import {Board} from './Board';
import { Sidebar } from './Sidebar';
export const Home = () => {
  return (
    <>
    <div className='relative w-screen h-screen flex'>
      <Sidebar/>
      <Board/>
      <Alert/>
    </div>
    </>
  )
}
