import React, { useEffect, useState } from 'react'
import ExpenseElement from '../Components/ExpenseElement'
import { ExpenseProvider } from '../Context/ExpenseContext'

function ExpenseTracker() {
    const [expenses, setExpenses] = useState([])
    const [item, setItem] = useState('')
    const [amount, setAmount] = useState(null)


    function add(e) {
        e.preventDefault()
        
        setExpenses((prev) => [{id: Date.now(), product: item, expenseAmount:Number(amount)}, ...prev])
        setAmount('')
        setItem('')
    }

    useEffect(() => {
        let localTodoData = JSON.parse(localStorage.getItem("expenses"))
        if (localTodoData && localTodoData.length > 0){
            setExpenses(localTodoData)
          }

    }, [])
    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses))
    }, [expenses])

    function deleteExpense(id) {
        setExpenses((prev) => expenses.filter((oneExpenss) => oneExpenss.id!==id))
    }
  return (
    <ExpenseProvider value={{deleteExpense}}>
    <h2 className='text-white font-semibold text-center text-3xl my-14'>Manage Your <span className='text-blue-600'>Expenses.</span></h2>

    <div className=''>
            <form id='myForm' onSubmit={add} className='flex flex-col items-center justify-center m-1 my-5'>
                <input required placeholder='Item' value={item} onChange={(e) => setItem(e.target.value)} type='text' 
                className='h-10 text-white w-9/12 md:w-4/12 border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20' />
                
                <input required placeholder='Amount' min={0} value={amount} onChange={(e) => setAmount(e.target.value)} type='number' 
                className='h-10 text-white w-9/12 md:w-4/12 border border-black/10 m-1 mt-3 rounded-lg px-3 outline-none duration-150 bg-white/20' />

                <button type='submit' className='m-1 w-20 mt-3 rounded-lg px-3 py-1 bg-green-600 text-white shrink-0'>Add</button>
            </form>
        </div>

        <div className='todo-dataCard m-1 my-7 w-full flex flex-col items-center justify-center'>
            {expenses.map((item) => {
                return(
                    <div key={item.id} className='sm:w-4/12 m-1 my-2 9/12'>
                          <ExpenseElement data={item}/>
                    </div>
                )
            })}
        </div>
        </ExpenseProvider>
  )
}

export default ExpenseTracker