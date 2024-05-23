import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"



export default function Producto({producto}) {
    
    const {handleClickModal, handleSetProdcuto} = useQuiosco()
    const {nombre,precio,imagen} = producto


    return (
        <div className="p-3 bg-white border shadow">
            <img 
                className="w-full"
                src={`/img/${imagen}.jpg`} 
                alt={`imagen ${nombre}`} 
            />

            <div className="p-5">
                <h3 className="text-2xl font-bold">{nombre}</h3>
                <p className="mt-5 text-4xl font-bold text-amber-500">
                    {formatearDinero(precio)}
                </p>

                <button 
                    className="w-full p-3 mt-5 font-bold text-white uppercase bg-indigo-600 rounded hover:bg-indigo-800"
                    type="button"
                    onClick={() => {
                        handleClickModal();
                        handleSetProdcuto(producto);
                    }}
                >
                    Agregar
                </button>
            </div>
            
        </div>
    )
}
