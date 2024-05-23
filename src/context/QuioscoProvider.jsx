import {createContext, useState, useEffect} from 'react'
import { categorias as categoriasDB } from "../data/categorias"

const QuioscoContext = createContext();
const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriActual]  = useState(categorias[0])
    const [modal, setModal]  = useState(false)
    const [producto, setProducto]  = useState({})
    const [pedido, setPedido] = useState([])

    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setCategoriActual(categoria)
    }

    const handleClickModal = () => {
        setModal(!modal)
    }

    const handleSetProdcuto = producto => {
        setProducto(producto)
    }

    const handleAgregarPedido = ({categoria_id, imagen, ...producto}) => {
        // Comprueba si el producto actual ya está en el pedido
        if (pedido.some(pedidoState => pedidoState.id === producto.id)) {
            // Si está, encuentra el pedido en el pedido
            const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState);
        
            // Actualiza la cantidad del producto con la cantidad del producto encontrado en el pedido
            setPedido(pedidoActualizado)
        } else {
            setPedido([...pedido, producto])
        }
    }
    

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProdcuto,
                pedido,
                handleAgregarPedido
            }}
        >{children}

        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext