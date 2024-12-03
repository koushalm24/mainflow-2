
import './App.css'
import { useState } from 'react'
import Moviecard from './components/MovieCard'

const API_URL = import.meta.env.VITE_API_URL;
// const API_URL = "http://www.omdbapi.com/?apikey=eb5f16b1";

function App() {
const [st,setSt] = useState('');
const [movie, setMovie] = useState([]);


const searchMovie = async (title) => {
  try {
    
    const response = await fetch(`${API_URL}&s=${title}`);
    
    const data = await response.json();
    
    if (data.Response === "True") {
      setMovie(data.Search);
    } else {
      
      setMovie([]);
    }
  } catch (error) {
    console.error('Error during fetch:', error.message);
    setMovie([]);
  }
};


  return (
    <>
    <div id='main'>
    <header>MOVIEAPP</header>
    <div>
    <input value={st} onChange={(e)=> setSt(e.target.value)} type="text" placeholder='Search Here'/>
    <button onClick={()=> searchMovie(st)}>Search</button>
    </div>
    

    <div id="card">
      {/* <Moviecard m={data} /> */}
    {movie.length > 0 ? (
      
        (movie.map((m) => (
          <Moviecard key={m.imdbID} m={m} />
        )))
      
    ) : (
      <h2>No Movies Found</h2>
    )}
        
      </div>
   
    </div>
    </>
  )
}

export default App
