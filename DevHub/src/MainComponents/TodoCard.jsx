import React from 'react'
import { useState } from "react";
import TodoElement from '../Components/TodoElement';
import './Todo.css'
import { TodoContext, TodoProvider } from '../Context/TodoContext';
import { useEffect } from 'react';

function TodoCard() {

    let [input, setInput] = useState('')

    let [todos, setTodos] = useState([])

    //adding todo to the array.
    function add(e){
        e.preventDefault()

        if(input.length>0){
            setTodos((prev) => [{id: Date.now(), todo: input, completed: false}, ...prev])
            setInput('')
        }
    }

    function deleteTodo(id) {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }

    useEffect(() => {
        let localTodoData = JSON.parse(localStorage.getItem("todos"))
        if (localTodoData && localTodoData.length > 0){
            setTodos(localTodoData)
          }

    }, [])

    useEffect(()=> {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])


    return (
        <TodoProvider value={{deleteTodo}}>
        <h2 className='text-white font-semibold text-center text-3xl my-14'>Manage Your <span className='text-blue-600'>Todos.</span></h2>

        <div className=''>
            <form id='myForm' onSubmit={add} className='flex justify-center m-1 my-5'>
                <input value={input} onChange={(e) => setInput(e.target.value)} type='text' 
                className='text-white w-9/12 md:w-4/12 border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"' />

                <button type='submit' className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'>Add</button>
            </form>
        </div>

        <div className='todo-dataCard m-1 my-7 w-full flex flex-col items-center justify-center'>
            {todos.map((item) => {
                return(
                    <div key={item.id} className='sm:w-4/12 m-1 my-2 9/12'>
                          <TodoElement data={item}/>
                    </div>
                )
            })}
        </div>
        </TodoProvider>
    )
 }
export default TodoCard