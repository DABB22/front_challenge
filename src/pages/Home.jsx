import { useNavigate} from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='sm:max-w-md sm:mx-auto sm:p-5'>
        <div className="my-48 space-y-52">
            <h3 className="text-3xl text-white">You will be presented with 12 True o False questions.</h3>
            <p className="font-bold uppercase text-xl text-indigo-900">Can You score 100%?</p>
        </div>

        <button                     
            className="bg-pink-900 text-white px-5 py-2 font-bold uppercase rounded"
            onClick={() => navigate('/quiz')} 
            type="button"
        >begin</button>
    </div>
  )
}

export default Home