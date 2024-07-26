import { categories } from "../data/categories";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useMemo, useState } from "react";
import { DraftExpense, Value } from "../types";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";

export default function ExpenseForm() {
  const [expense, setExpense] = useState<DraftExpense>({
    amount: 0,
    expenseName: "",
    category: "",
    date: new Date(),
  });

  const { dispatch } = useBudget();

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const isAmountField = ["amount"].includes(name);

    setExpense({
      ...expense,
      [name]: isAmountField ? +value : value,
    });
  };

  const handleChangeDate = (date: Value) => {
    setExpense({
      ...expense,
      date,
    });
  };

  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(expense).includes("")) {
      setError("Todos los campos son obligatorios...");
      return;
    }
    dispatch({ type: "add-expense", payload: { expense } });
    dispatch({ type: "close-modal" });
  };

  const isValid = useMemo(() => {
    const includes = Object.values(expense).includes("");
    return includes;
  }, [expense]);

  return (
    <form className=" space-y-5" onSubmit={handleSubmit}>
      <legend className=" uppercase border-b-4 py-2 text-center text-2xl font-black  font-lato text-slate-700">
        Nuevo Gasto
      </legend>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className=" flex flex-col gap-2 ">
        <label
          htmlFor="expenseName"
          className=" text-sm font-lato font-semibold text-slate-700"
        >
          Nombre Gasto:
        </label>
        <input
          type="text"
          id="expenseName"
          placeholder="Escribe nombre del gasto"
          className=" bg-slate-100 p-2"
          name="expenseName"
          value={expense.expenseName}
          onChange={handleChange}
        />
      </div>
      <div className=" flex flex-col gap-2 ">
        <label
          htmlFor="amount"
          className=" text-sm font-lato font-semibold text-slate-700"
        >
          Cantidad:
        </label>
        <input
          type="number"
          id="amount"
          placeholder="Escribe la cantidad gastada"
          className=" bg-slate-100 p-2"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
        />
      </div>
      <div className=" flex flex-col gap-2 ">
        <label
          htmlFor="category"
          className=" text-sm font-lato font-semibold text-slate-700"
        >
          Categoria:
        </label>
        <select
          id="category"
          className=" bg-slate-100 p-2"
          name="category"
          value={expense.category}
          onChange={handleChange}
        >
          <option value="">-- Seleccione --</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div className=" flex flex-col gap-2 ">
        <label className=" text-sm font-lato font-semibold text-slate-700">
          Fecha Gasto:
        </label>
        <DatePicker
          className=" bg-slate-100 p-2 border-0"
          value={expense.date}
          onChange={handleChangeDate}
        />
      </div>

      <input
        type="submit"
        className=" disabled:opacity-40 bg-green-500 hover:bg-green-700  cursor-pointer w-full p-2 uppercase rounded-lg font-bold text-white font-lato"
        value="Registrar gasto"
        disabled={isValid}
      />
    </form>
  );
}
