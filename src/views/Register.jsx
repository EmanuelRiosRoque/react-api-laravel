import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <>
        <h1 className="text-4xl font-bold">Crea tu cuenta</h1>
        <p>Crea una cuenta llenando el formulario</p>


        <div className="px-5 py-10 mt-10 bg-white rounded-md shadow-md">
            <form className="mb-4">
                <div className="mb-4">
                    <label
                        className="text-slate-800"
                        htmlFor="name"
                    >Nombre:</label>
                    <input 
                        className="w-full p-3 mt-2 bg-gray-50"
                        type="text" 
                        id="name"
                        name="name"
                        placeholder="Tu nombre"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-slate-800"
                        htmlFor="email"
                    >Email:</label>
                    <input 
                        className="w-full p-3 mt-2 bg-gray-50"
                        type="email" 
                        id="email"
                        name="email"
                        placeholder="Tu correo electronico"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-slate-800"
                        htmlFor="password"
                    >Password:</label>
                    <input 
                        className="w-full p-3 mt-2 bg-gray-50"
                        type="password" 
                        id="password"
                        name="password"
                        placeholder="Tu contraseña"
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="text-slate-800"
                        htmlFor="password_confirmation"
                    >Repetir Password:</label>
                    <input 
                        className="w-full p-3 mt-2 bg-gray-50"
                        type="password" 
                        id="password_confirmation"
                        name="password_confirmation"
                        placeholder="Repite contraseña"
                    />
                </div>

                <input 
                    className="w-full p-3 mt-5 font-bold text-white uppercase bg-indigo-600 cursor-pointer hover:bg-indigo-800" 
                    type="submit" 
                    value="Crear Cuenta"
                />
            </form>
        </div>
        <nav className="mt-5">
            <Link to="/auth/login">
                Ya tienes cuenta?, Inicia Sesion
            </Link>
        </nav>
    </>
  )
}
