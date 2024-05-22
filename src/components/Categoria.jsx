import useQuiosco from "../hooks/useQuiosco"

export default function Categoria({categoria}) {

    const {handleClickCategoria, categoriaActual} = useQuiosco()
    const {icono, id, nombre} = categoria

    const resaltaCategoriaActual = () => categoriaActual.id === id ? 'bg-amber-400' : 'bg-white'

    return (
    <div className={`${resaltaCategoriaActual()} flex items-center w-full gap-4 p-3 border cursor-pointer hover:bg-amber-400`}>
        <img 
            className="w-10"
            src={`/img/icono_${icono}.svg`} 
            alt="Imagen Logo" 
        />
        {/* Para prevenir que se ejecute en handle () => */}
        <button 
            className="text-lg font-bold truncate cursor-pointer"
            type="button"
            onClick={() => handleClickCategoria(id)}
        >
            {nombre}
        </button>
    </div>
  )
}
