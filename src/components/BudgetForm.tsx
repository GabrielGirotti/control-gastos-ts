import { useMemo, useState } from "react";

export default function BudgetForm() {
  const [budget, setBudget] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(+e.target.value);
  };

  const isValid = useMemo(() => {
return budget <= 0 || isNaN(budget)
  }, [budget])

  return (
    <form className=" space-y-5">
      <div className=" flex flex-col space-y-5">
        <label
          htmlFor="budget"
          className=" text-4xl text-blue-600 font-bold text-center"
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
        className=" bg-blue-600 hover:bg-blue-700 cursor-pointer text-white uppercase w-full p-2 font-bold disabled:opacity-40"
        disabled={isValid}
      />
    </form>
  );
}
