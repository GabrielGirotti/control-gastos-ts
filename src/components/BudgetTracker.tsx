import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function BudgetTracker() {
  const { state, getSpent, remainBudget, dispatch } = useBudget();

  const percentaje = +((getSpent / state.budget) * 100).toFixed(2);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 px-2 ">
      <div className=" flex flex-col justify-center items-center gap-8 ">
        <div className=" flex flex-col gap-4 justify-start w-full px-4">
          <AmountDisplay label={"Presupuesto"} amount={state.budget} />

          <AmountDisplay label={"Disponible"} amount={remainBudget} />

          <AmountDisplay label={"Gastado"} amount={getSpent} />
        </div>
        <button
          onClick={() => dispatch({ type: "reset-app" })}
          type="button"
          className=" bg-red-600 hover:bg-red-600 sm:bg-red-950 transition-all duration-300 w-full p-2 text-white uppercase font-bold rounded-lg font-lato"
        >
          Reiniciar App
        </button>
      </div>
      <div className=" flex justify-center">
        <CircularProgressbar
          value={percentaje}
          text={`${percentaje}% gastado`}
          styles={buildStyles({
            pathColor: "#e2e8f0",
            trailColor: percentaje === 100 ? "#dc2626" : "#64748b",
            textSize: 10,
            textColor: "#D7D7D7",
            strokeLinecap: "butt",
          })}
        />
      </div>
    </div>
  );
}
