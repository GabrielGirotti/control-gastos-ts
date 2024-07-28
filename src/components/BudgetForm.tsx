import { useMemo, useState } from "react";
import { useBudget } from "../hooks/useBudget";

export default function BudgetForm() {
  const [budget, setBudget] = useState(0);
  const { dispatch } = useBudget();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(+e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "add-budget", payload: { budget } });
  };

  const isValid = useMemo(() => {
    return budget <= 0 || isNaN(budget);
  }, [budget]);

  return (
    <form className=" space-y-5" onSubmit={handleSubmit}>
      <div className=" flex flex-col space-y-5">
        <label
          htmlFor="budget"
          className=" text-2xl text-slate-200 font-bold text-center font-lato"
        >
          Definir presupuesto
        </label>
        <input
          type="number"
          className=" w-full bg-white border border-gray-200 p-2"
          placeholder="Introduzca su presupuesto..."
          name="budget"
          id="budget"
          value={budget}
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        value="Definir presupuesto"
        className=" bg-slate-500 hover:bg-slate-700 cursor-pointer text-white uppercase w-full p-2 font-bold disabled:opacity-40"
        disabled={isValid}
      />
    </form>
  );
}
