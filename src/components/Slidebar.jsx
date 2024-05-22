import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria"

export default function Slidebar() {
    const {categorias} = useQuiosco()

  return (
    <aside className="md:w-72">
        <div className="p-4">
            <img 
                className="w-40"
                src="img/logo.svg" 
                alt="Imagen Logotipo" 
            />
        </div>

        <div className="mt-10">
            {categorias.map(categoria => (
                <Categoria 
                    key={categoria.id}
                    categoria = {categoria}
                />
            ))}
        </div>

        <div className="px-5 my-5">
            <button
                className="w-full p-3 font-bold text-center text-white truncate bg-red-500 rounded hover:bg-red-600"
                type="button"
            >
                Cancelar Orden
            </button>
        </div>
        
    </aside>
  )
}
