import { useEffect, useState } from 'react'
import './App.css'
import TodoCard from './MainComponents/TodoCard'
import Timing from './MainComponents/TimingCard'
import { FaGithub } from "react-icons/fa";
import HomeCard from './MainComponents/HomeCard'
import ExpenseTracker from './MainComponents/ExpenseTracker'
import { IoReorderThree } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";


function App() {

  const [card, setCard] = useState(<HomeCard />)

  const [toggle, setToggle] = useState(false)

  // features array

  return (
    <>
    
  <div className='header flex flex-row p-2'>
      <h1 className=' pl-5 md:pl-7 text-center text-3xl md:text-4xl font-semibold text-white p-1'>Dev<span className='text-blue-600 font-bold'>Hub</span></h1>
    <div className='hidden md:flex navbar-items flex px-1 p-0 pt-1 md:pt-2 justify-center items-center text-sm md:text-lg text-white'>
      <p id='home' onClick={()=>setCard(<HomeCard/>)} className='px-4'>Home</p>
      <p id='todo' onClick={()=>setCard(<TodoCard/>)} className='px-4'>Todo</p>
      <p id='timer' onClick={()=>setCard(<Timing/>)} className='px-4'>Time tracker</p>
      <p id='expenseTracker' onClick={()=>setCard(<ExpenseTracker/>)} className=' px-4'>expenseTracker</p>
      <p id='github' className=' px-4'><a target='blank' href='https://github.com/AayushtheCoder01'><FaGithub /></a></p>
    </div>
    <button className='md:hidden rounded-lg p-1.5 mr-3 bg-slate-800' onClick={() => setToggle(!toggle)}>
      {toggle ? <MdOutlineCancel color='white' size={20}/> :<IoReorderThree color='white' size={20} /> }</button>
  </div>
  <div className={`${toggle ? 'flex' : 'hidden'} p-2 bg-slate-800 text-white flex-col`}>
  <p id='home' onClick={()=>setCard(<HomeCard/>)} className='px-4'>Home</p>
      <p id='todo' onClick={()=>setCard(<TodoCard/>)} className='px-4'>Todo</p>
      <p id='timer' onClick={()=>setCard(<Timing/>)} className='px-4'>Time tracker</p>
      <p id='expenseTracker' onClick={()=>setCard(<ExpenseTracker/>)} className=' px-4'>expenseTracker</p>
      <p id='github' className=' px-4'><a target='blank' href='https://github.com/AayushtheCoder01'><FaGithub /></a></p>
  </div>
      {card}
    </>
  )
    }

export default App
