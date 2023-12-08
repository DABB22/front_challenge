
// extraemos las variables y funciones que pasamos por props desde el componente de Quiz
const Results = ({preguntas, respuestas, puntaje, setContador, setPuntaje, navigate, setRespuestas}) => {


  return (
    <div className=" sm:mx-auto sm:p-5">
      <div className="p-3">
        <h3 className="text-2xl font-bold">You Scored:</h3>
        <p className="text-white text-lg">{puntaje} / {preguntas.length}</p> {/* mostramos el numero de aciertos */}
      </div>
        {preguntas.length && ( //evaluamos si hay datos en la variable de preguntas para mostrar la información
          <div>
            {preguntas.map( (pregunta, index) => (
              <div 
                key={index}
                className="p-3"
              >

                {respuestas[index] === pregunta.correct_answer ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-emerald-100 inline w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <h3 className="inline">{pregunta.question}</h3>
                  </>
                  ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-rose-900 inline w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <h3 className="inline">{pregunta.question}</h3>
                  </>
                )}

              </div>
              
            ))}
          </div>
        )}
      <div>

      </div>

      <button
        className="bg-fuchsia-900 text-white px-5 py-2 font-bold uppercase rounded mt-10"
          onClick={ () => { // escuchamos por el evento de click para volver a la pagina inicial y reiniciar el juego, reiniciamos todas las variables del state.
              setContador(0)
              setPuntaje(0)
              setRespuestas([])
              navigate('/')
          }}
      >Play Again!!!!</button>
    </div>
  )
}

export default Results;