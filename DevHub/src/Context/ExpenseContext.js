import { createContext, useContext } from "react";

export const ExpenseContext = createContext({
    deleteExpense: (id) => {}
})

export const useExpense = () => {
    return useContext(ExpenseContext)
}

export const ExpenseProvider = ExpenseContext.Provider