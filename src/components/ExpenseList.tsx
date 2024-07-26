import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpenseDetail from "./ExpenseDetail";


export const ExpenseList = () => {

    const {state} = useBudget()

    const isEmpty = useMemo(()=> state.expenses.length === 0, [state.expenses])

    return (
        <div>
            {isEmpty ? <p className="text-2xl text-gray-400 font-bold text-center">Aun no hay gastos...</p> : (
                <>
                <p className="text-2xl text-gray-400 font-bold text-center">Listado de Gastos:</p>
                {state.expenses.map((expense)=>(
                    <ExpenseDetail key={expense.id} expense={expense}/>
                ))}
                </>
            )}
        </div>
    );
}

export default ExpenseList;
