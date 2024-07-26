import AmountDisplay from "./AmountDisplay";

export default function BudgetTracker() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 px-2 ">
      <div className=" flex flex-col justify-center items-center gap-8 ">
        <div className=" flex flex-col gap-4 justify-start w-full px-4">
          <AmountDisplay label={"Presupuesto"} amount={10} />

          <AmountDisplay label={"Disponible"} amount={2} />

          <AmountDisplay label={"Gastado"} amount={8} />
        </div>
        <button
          type="button"
          className=" bg-red-600 hover:bg-red-600 sm:bg-red-200 transition-all duration-300 w-full p-2 text-white uppercase font-bold rounded-lg font-lato"
        >
          Reiniciar App
        </button>
      </div>
      <div className=" flex justify-center">
        <img src="/grafico.jpg" alt="Grafico de gastos"></img>
      </div>
    </div>
  );
}
