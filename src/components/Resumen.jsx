import useQuiosco from "../hooks/useQuiosco"
import ResumenProducto from "./ResumenProducto";

export default function Resumen() {

  const {pedido} = useQuiosco();
  
  return (
    <div className="px-5 w-72">
      <aside className="h-screen w-75 overflow-y-scrollp-5">
        <h1 className="text-4xl font-black">
          Mi Pedido
        </h1>

        <p>
            Aqui podras ver el resumen y totales en tu pedido
        </p>

        <div className="py-10">
            {pedido.length  === 0 ? (
              <p className="text-2xl text-center">No hay elementos en tu pedido</p>
            ): (
              pedido.map(producto => (
                <ResumenProducto
                  key={producto.id}
                  producto={producto}
                />
              ))    
            )}
        </div>


        <p className="mt-10 tetx-xl">
          Total: {''}
        </p>

        <form className="w-full">
          <div className="mt-5">
            <input 
              type="submit"
              className="w-full px-5 py-2 font-bold text-center text-white uppercase bg-indigo-600 rounded cursor-pointer hover:bg-indigo-800"
              value="Confirmar Envio"
            />

          </div>
        </form>
      </aside>

    </div>
  )
}
