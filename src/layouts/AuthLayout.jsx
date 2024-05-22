import {Outlet} from 'react-router-dom'

export default function authLayout() {
  return (
    <div className='flex flex-col max-w-4xl m-auto mt-10 md:mt-28 md:flex-row item-center'>
        <img 
            src='../img/logo.svg'
            alt='Imagen Logotipo'
            className='max-w-xs'
        />  

        <div className='w-full p-10'>
            <Outlet/>
        </div>
    </div>
  )
}
