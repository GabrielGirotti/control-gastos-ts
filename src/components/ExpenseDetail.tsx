import { useMemo } from "react";
import { formatDate } from "../helpers";
import { Expense } from "../types";
import AmountDisplay from "./AmountDisplay";
import { categories } from "../data/categories";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { useBudget } from "../hooks/useBudget";

type ExpenseDetailProps = {
  expense: Expense;
};

export const ExpenseDetail = ({ expense }: ExpenseDetailProps) => {
  const { dispatch } = useBudget();

  const categoryInfo = useMemo(
    () => categories.filter((cat) => cat.id === expense.category)[0],
    [expense]
  );

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => dispatch({type: "get-expense-id", payload: {id: expense.id}})} children={"Actualizar"}></SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={() =>
          dispatch({ type: "delete-expense", payload: { id: expense.id } })
        }
        children={"Eliminar"}
        destructive={true}
      ></SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        maxSwipe={1}
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className=" bg-white shadow-xl p-10 w-full border-b border-gray-200 flex gap-5 items-center cursor-pointer">
          <div>
            <img
              src={`/icono_${categoryInfo.icon}.svg`}
              alt="Icono Gasto"
              className="w-20"
            />
          </div>
          <div className="flex-1 ">
            <p className=" text-sm font-bold uppercase text-slate-600 font-lato">
              {categoryInfo.name}
            </p>
            <p className=" text-lg text-slate-600 font-bold font-lato">
              {expense.expenseName}
            </p>
            <p className="text-slate-600 text-sm font-lato">
              {formatDate(expense.date!.toString())}
            </p>
          </div>
          <AmountDisplay amount={expense.amount} />
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default ExpenseDetail;
