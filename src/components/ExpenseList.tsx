import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpenseDetail from "./ExpenseDetail";
import { FilteByCategory } from "./FilteByCategory";

export const ExpenseList = () => {
  const { state } = useBudget();

  const filter = state.currentCat
    ? state.expenses.filter((exp) => exp.category === state.currentCat)
    : state.expenses;

  const isEmpty = useMemo(() => filter.length === 0, [filter]);

  return (
    <div>
      {isEmpty ? (
        <>
          <p className="text-2xl text-gray-400 font-bold text-center font-lato mb-4 ">
            Aun no hay gastos...
          </p>
          <FilteByCategory />
        </>
      ) : (
        <>
          <p className="text-2xl text-gray-400 font-bold text-center mb-4 font-lato">
            Listado de Gastos:
          </p>
          <FilteByCategory />
          {filter.map((expense) => (
            <ExpenseDetail key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
};

export default ExpenseList;
