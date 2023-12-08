
import { useLoaderData, useNavigate} from 'react-router-dom';
import {useState} from 'react'
import { obtenerDatosPreguntas } from "../data/questions";
import Results from '../components/Results';

export function loader() {
    const datosPreguntas = obtenerDatosPreguntas();
    return datosPreguntas;
}

const Quiz = () => {
    
    const datosPreguntas = useLoaderData();
    const navigate = useNavigate();
    const [contador, setContador] = useState(0);
    const [puntaje, setPuntaje] = useState(0);
    const [respuestas, setRespuestas] = useState([]);
    const preguntas = datosPreguntas.results;
    console.log(preguntas)
    console.log(preguntas.length)
    console.log(respuestas)
    console.log(puntaje)


  return (
    <>
        {contador < preguntas.length ? (
            <div className='sm:max-w-md sm:mx-auto sm:p-5'>
                {datosPreguntas.results?.map((value,key)=>(
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
                                        onClick={() => { if (contador<=11) {
                                                            setContador(key+1)
                                                            setRespuestas([...respuestas, 'True'])
                                                            if(value.correct_answer==='True'){
                                                                setPuntaje(puntaje+1)
                                                            }
                                                            
                                                        }} }
                                    >True</button>

                                    <button 
                                        className='bg-red-800 text-white px-5 py-2 font-bold uppercase rounded'
                                        onClick={() => { if (contador<=11) {
                                                            setContador(key+1)
                                                            setRespuestas([...respuestas, 'False'])
                                                            if(value.correct_answer==='False'){
                                                                setPuntaje(puntaje+1)
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
        ):(
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