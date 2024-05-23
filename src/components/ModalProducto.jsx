import { useState, useEffect } from "react";
import useQuiosco from "../hooks/useQuiosco"
import { formatearDinero } from "../helpers";

export default function ModalProducto() {

    const {producto,handleClickModal,handleAgregarPedido, pedido} = useQuiosco();
    // const {imagen,nombre,precio} = producto

    const [cantidad,setCantidad] = useState(1)
    const [edicion, setEdicion] = useState(false)


    useEffect(() => {
        // Comprueba si el producto actual ya está en el pedido
        if (pedido.some(pedidoState => pedidoState.id === producto.id)) {
            // Si está, encuentra el producto en el pedido
            const productoEdicion = pedido.filter(pedidoState => pedidoState.id === producto.id)[0];
    
            // Actualiza la cantidad del producto con la cantidad del producto encontrado en el pedido
            setCantidad(productoEdicion.cantidad);
            setEdicion(true )
        }
    }, [pedido]); // Se ejecuta cada vez que cambia el estado de 'pedido'


    return (
        <div className="gap-10 md:flex">
            <div className="md:w-1/3">
                <img 
                    src={`/img/${producto.imagen}.jpg`} 
                    alt={`Imagen producto  ${producto.nombre}`} 
                />
            </div>
            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button onClick={handleClickModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <h1 className="mt-5 text-3xl font-bold">
                    {producto.nombre}
                </h1>

                <p className="mt-5 text-5xl font-black text-amber-500">
                    {formatearDinero(producto.precio)}
                </p>

                <div className="flex gap-4 mt-5">
                    <button
                        type="button"
                        onClick={() => {
                            if (cantidad <= 1) {
                                return;
                            }
                            setCantidad(cantidad - 1);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                    </button>

                    <p className="text-2xl">
                        {cantidad}
                    </p>

                    <button
                        type="button"
                        onClick={() => {
                            if (cantidad >= 5) {
                                return;
                            }
                            setCantidad(cantidad + 1);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>  
                    </button>
                </div>


                <button
                    className="px-5 py-2 mt-5 font-bold text-white uppercase bg-indigo-600 rounded hover:bg-indigo-800"
                    type="button"
                    onClick={() =>{
                        handleAgregarPedido({...producto, cantidad})
                        handleClickModal()
                    }}
                        
                >
                    {edicion ? 'Guardar Cambios' : 'Añadir al pedido'}
                </button>

            </div>
        </div>
    )
}
