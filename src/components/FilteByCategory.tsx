import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";

export const FilteByCategory = () => {
  const { dispatch } = useBudget();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "add-cat-filter", payload: { id: e.target.value } });
  };
  return (
    <div className="pb-4 flex flex-col justify-center items-center">
      <form>
        <div className="flex flex-col justify-center items-center md:flex-row md:items-center gap-5">
          <label
            htmlFor="category"
            className="text-sm font-bold uppercase text-slate-200 font-lato"
          >
            Filtrar gastos
          </label>
          <select
            onChange={handleChange}
            id="category"
            className=" bg-slate-200 px-3 py-1 flex-1 rounded"
          >
            <option value="">--Todas las categorias--</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};
