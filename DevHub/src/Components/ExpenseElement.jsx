import React from 'react'
import '../MainComponents/Todo.css'
import { useExpense } from '../Context/ExpenseContext'

function ExpenseElement({data}) {
    const {deleteExpense} = useExpense()
  return (
    <>
    <div className='elem w-full flex space-x-1 bg-blue-500 py-1 px-5 rounded-lg'>
        <div className='pr-3 text-white font-semibold pb-1 text-lg md:text-2xl'>Item: {data.product}</div>
        <div className='pl-3 text-white font-semibold pb-1 text-lg md:text-2xl'>Amount: {data.expenseAmount}</div>
    <button onClick={() => deleteExpense(data.id)} className='pl-5'>❌</button>
    </div>
    </>
  )
}

export default ExpenseElement