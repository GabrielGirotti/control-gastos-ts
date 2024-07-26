import { useMemo } from "react";
import { formatDate } from "../helpers";
import { Expense } from "../types";
import AmountDisplay from "./AmountDisplay";
import { categories } from "../data/categories";

type ExpenseDetailProps = {
  expense: Expense;
};

export const ExpenseDetail = ({ expense }: ExpenseDetailProps) => {
  const categoryInfo = useMemo(
    () => categories.filter((cat) => cat.id === expense.category)[0],
    [expense]
  );

  return (
    <div className=" bg-white shadow-xl p-10 w-full border-b border-gray-200 flex gap-5 items-center mt-8 ">
      <div>
        <img
          src={`/icono_${categoryInfo.icon}.svg`}
          alt="Icono Gasto"
          className="w-20"
        />
      </div>
      <div className="flex-1 ">
        <p className=" text-sm font-bold uppercase text-slate-600">
          {categoryInfo.name}
        </p>
        <p className=" text-lg text-slate-600 font-bold">
          {expense.expenseName}
        </p>
        <p className="text-slate-600 text-sm">
          {formatDate(expense.date!.toString())}
        </p>
      </div>
      <AmountDisplay amount={expense.amount} />
    </div>
  );
};

export default ExpenseDetail;
