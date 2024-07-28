import { useReducer, createContext, Dispatch, ReactNode } from "react";
import {
  BudgetActions,
  BudgetState,
  budgetReducer,
  initialState,
} from "../reducer/budget-reducer";
import { Expense } from "../types";

type BudgetContextProps = {
  state: BudgetState;
  dispatch: Dispatch<BudgetActions>;
  getSpent: number;
  remainBudget: number;
};

type BudgetProviderProps = {
  children: ReactNode;
};

export const BudgetContext = createContext<BudgetContextProps>(null!);

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const getSpent = state.expenses.reduce(
    (total: number, item: Expense) => total + item.amount,
    0
  );

  const remainBudget = state.budget - getSpent;

  return (
    <BudgetContext.Provider value={{ state, dispatch, getSpent, remainBudget }}>
      {children}
    </BudgetContext.Provider>
  );
};
