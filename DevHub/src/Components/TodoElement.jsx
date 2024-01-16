import React from 'react'
import '../MainComponents/Todo.css'
import { useTodo } from '../Context/TodoContext'

function TodoElement({data}) {
    const {deleteTodo} = useTodo()

  return (
    <>
    <div className='elem w-full flex space-x-1 bg-blue-500 py-1 px-5 rounded-lg'>
        <div className='text-white font-semibold pb-1 text-lg md:text-2xl'>{data.todo}</div>
    <button onClick={() => deleteTodo(data.id)} className='pl-5'>❌</button>
    </div>
    
    </>
  )
}

export default TodoElement