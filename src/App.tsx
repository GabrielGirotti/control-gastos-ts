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
      <header className=" bg-slate-900 py-8 max-h-72 shadow-lg ">
        <h1 className=" text-center font-black text-2xl text-white font-lato">
          Control de Gastos
        </h1>
      </header>

      <div className=" sm:max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10 w-[90vw] ">
        {isValid ? <BudgetTracker /> : <BudgetForm />}
      </div>

      {isValid && (
        <main className=" sm:max-w-3xl mx-auto py-10 w-[90vw] ">
          <ExpenseList/>
          <ExpenseModal />{" "}
        </main>
      )}
    </>
  );
}

export default App;
