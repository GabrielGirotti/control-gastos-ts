import { useContext } from "react";
import { BudgetContext } from "../context/BudgentContext";

export const useBudget = () => {
  const context = useContext(BudgetContext);
  if(!context){
    throw new Error('UseBudget must be used within a BudgetProvider')
  }
  return context;
};
