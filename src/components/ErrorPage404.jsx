
// página de error para errores 404 en nuestra app

import { useRouteError } from 'react-router-dom'

export default function ErrorPage404() {
    const error = useRouteError()
    console.log(error)
    return(
        <div className='space-y-8 p-10'>
            <h2 className='text-center text-4xl font-extrabold mt-20 text-black'>ERROR 404!</h2>
            <p className='text-center'>Not Found!</p>
        </div>
    )
}