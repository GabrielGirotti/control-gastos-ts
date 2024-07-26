import AmountDisplay from "./AmountDisplay";

export default function BudgetTracker() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className=" flex justify-center">
        <img src="/grafico.jpg" alt="Grafico de gastos"></img>
      </div>

      <div className=" flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className=" bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
        >
          Reset App
        </button>
<div className=" flex flex-col gap-4 justify-start w-full px-4">
<AmountDisplay label={"Presupuesto"} amount={10} />

<AmountDisplay label={"Disponible"} amount={2} />

<AmountDisplay label={"Gastado"} amount={8} />
</div>

      </div>
    </div>
  );
}
