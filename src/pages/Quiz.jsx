
import { useLoaderData, useNavigate} from 'react-router-dom';
import {useState} from 'react'
import { obtenerDatosPreguntas } from "../data/questions";
import Results from '../components/Results';

export function loader() { // loader para obtener los datos de nuestra API
    const datosPreguntas = obtenerDatosPreguntas();
    return datosPreguntas;
}

const Quiz = () => {
    
    const datosPreguntas = useLoaderData(); // extraemos los datos que consultamos en el loader.
    const navigate = useNavigate(); 
    const [contador, setContador] = useState(0); // variable para manejar el state de las preguntas, se ira mostrando una a una.
    const [puntaje, setPuntaje] = useState(0); // variable que maneja el state del puntaje del usuario
    const [respuestas, setRespuestas] = useState([]); // Array que almacena el state de las respuestas del cliente
    const preguntas = datosPreguntas.results; // variable que almacena el array de las preguntas que nos arrojó la consulta hacía la API

  return (
    <>
        {contador < preguntas.length ? ( // si se cumple la condición mostraremos las preguntas una a una.
            <div className='sm:max-w-md sm:mx-auto sm:p-5'>
                {datosPreguntas.results?.map((value,key)=>( // 
                    <div key={key}>
                        { contador === key && (
                            <div>
                                <h3 className='mt-16 uppercase text-2xl p-3 font-semibold   '>Category - <span>{value.category}</span></h3>
                                <div className='py-24 px-10 mt-24 mx-3 border-white border-solid border-2'>
                                    <p key={key}>{value.question}</p>
                                </div>
                                <p className='p-3 mb-14 '>Question {key+1} of {datosPreguntas.results?.length}</p>
                                <div className='p-3'>
                                    <button 
                                        className='bg-blue-800 text-white px-5 py-2 font-bold uppercase rounded mr-5 sm:mr-16'
                                        onClick={() => { if (contador<=11) { // cuando se de el evento click se ejecutaran estas funciones
                                                            setContador(key+1) // aumentamos el contador en 1
                                                            setRespuestas([...respuestas, 'True']) // almacenaremos la respuesta en el array de respuestas
                                                            if(value.correct_answer==='True'){ // en caso de que sea correcta la respuesta aumentamos el puntaje en 1
                                                                setPuntaje(puntaje+1)
                                                            }
                                                            
                                                        }} }
                                    >True</button>

                                    <button 
                                        className='bg-red-800 text-white px-5 py-2 font-bold uppercase rounded'
                                        onClick={() => { if (contador<=11) { // cuando se de el evento click se ejecutaran estas funciones
                                                            setContador(key+1) // aumentamos el contador en 1
                                                            setRespuestas([...respuestas, 'False']) // almacenaremos la respuesta en el array de respuestas
                                                            if(value.correct_answer==='False'){ 
                                                                setPuntaje(puntaje+1) // en caso de que sea correcta la respuesta aumentamos el puntaje en 1
                                                            }
                                                        }} }
                                    >False</button>
                                </div>

                                <p className='mt-10 p-3 font-bold text-indigo-900'>Good luck dude!!!</p>
                            </div>
                        )}

                    </div>

                    ))}
            </div>
        ):( // cuando ya no se cumpla la condición inicial mostraremos el componente de resultado el cual mostrará el puntaje, las preguntas acertadas y las que no y un boton para reiniciar el juego.
            <Results 
                preguntas={preguntas}
                respuestas={respuestas}
                puntaje={puntaje}
                setContador={setContador}
                setPuntaje={setPuntaje}
                navigate={navigate}
                setRespuestas={setRespuestas}
            />
        )}

    </>
  )
}

export default Quiz