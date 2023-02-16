// import { useFetch } from "../hooks/useFetch";
import { useCounter, useFetch } from '../index';
import { LoadingQuote, Quote } from '../03-example/index';


export const Layout = () => {

    const { counter, increment, decrement } = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://bettercallsaul-api.onrender.com/characters/${counter}`);
    const {author, quote} = !!data && data[0];


  return (
    <>
        <h1>MultipleCustomHook</h1>
        <hr></hr>

        {
            isLoading 
            ? (
           <LoadingQuote />
            ) 
            : (
            <Quote author= {author} quote={quote}/>
            )
        }

        <button onClick={() => decrement()} className="btn btn-primary" >
            Previous
        </button>
        <button onClick={() => increment()} className="btn btn-primary" >
            Next
        </button>

       

          

    </>
  )
}
