import { useMemo } from "react";
import BudgetForm from "./components/BudgetForm";
import { useBudget } from "./hooks/useBudget";
import BudgetTracker from "./components/BudgetTracker";
import ExpenseModal from "./components/ExpenseModal";
import ExpenseList from "./components/ExpenseList";

function App() {
  const { state } = useBudget();

  const isValid = useMemo(() => state.budget > 0, [state.budget]);

  return (
    <>
      <header className=" bg-white py-8 max-h-72 shadow-lg ">
        <h1 className=" text-center font-black text-2xl text-slate-700 font-lato">
          Control de Gastos
        </h1>
      </header>

      <div className=" max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {isValid ? <BudgetTracker /> : <BudgetForm />}
      </div>

      {isValid && (
        <main className=" max-w-3xl mx-auto py-10">
          <ExpenseList/>
          <ExpenseModal />{" "}
        </main>
      )}
    </>
  );
}

export default App;
