import { useEffect, useState } from "react"
import { api } from "../axios"

const Joke = () => {

    const [jokes, setJokes] = useState([])
    
    const fetchData = async() => {
        try{
            const { data: result } = await api.get('https://official-joke-api.appspot.com/random_joke')
            setJokes([result])
            console.log(typeof(jokes))
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    return <div className="d-flex flex-column align-items-center bg-warning" style={{width: '100vw', height: '100vh'}}>
        <div className="d-flex position-fixed flex-column align-items-center w-25 bg-light m-5 p-5 rounded bg-dark text-white">
        {
                jokes.map((joke, index) => {
                    return <div key={index} className="d-flex flex-column align-items-center w-100" style={{height: '8em'}}>
                        <h6 className="text-center">{joke.setup}</h6>
                        <div>{joke.punchline}</div>
                    </div>
                    
                })
            }
            <button onClick={fetchData} className="btn btn-warning w-100 mt-4">Get A Random Joke</button>
        </div>
        
    </div>
}

export default Joke