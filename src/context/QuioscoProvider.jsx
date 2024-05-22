import {createContext, useState} from 'react'
import { categorias as categoriasDB } from "../data/categorias"

const QuioscoContext = createContext();
const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriActual]  = useState(categorias[0])
    const [modal, setModal]  = useState(false)
    const [producto, setProducto]  = useState({})

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

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProdcuto
            }}
        >{children}

        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext