import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
        <h1 className="text-4xl font-bold">Inicia Sesion</h1>
        <p>Para crear un pedido debes iniciar sesion</p>


        <div className="px-5 py-10 mt-10 bg-white rounded-md shadow-md">
            <form className="mb-4">
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

                <input 
                    className="w-full p-3 mt-5 font-bold text-white uppercase bg-indigo-600 cursor-pointer hover:bg-indigo-800" 
                    type="submit" 
                    value="Inicar Sesion"
                />
            </form>
        </div>

        <nav className="mt-5">
            <Link to="/auth/register">
                ¿No tienes cuenta?, crea una
            </Link>
        </nav>
    </>
  )
}
