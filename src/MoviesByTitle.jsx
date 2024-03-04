import { useState } from "react"
import MovieTvCard from "./MovieTvCard"
import axios from 'axios'

export default function MoviesByTitle(props) {


  const [title, setTitle] = useState('')
  const [moviesByTitle, setMoviesByTitle] = useState([])


  function handleChange(e){
    setTitle(e.target.value)
  }  

  function handleSubmit(e) {
    e.preventDefault()

    axios.get(`https://api.themoviedb.org/3/search/movie?query=${title}&api_key=780f31c900dd1e4c53a1b6cbfca8804a`)
      .then(response => setMoviesByTitle(response.data.results))
    
    setTitle('')
  }


  return (
    <section className="section">
      <h1>Search movies by title <span className="sub-text">{moviesByTitle.length} movies found </span></h1>

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={title}/>
        <button>find movie</button>
      </form>

      <div className="row-container">
        
        {moviesByTitle.map(movies => 
          <MovieTvCard key={movies.id} onAdd={props.onAdd} movies={ movies }/>
        )}
        
      </div>


    </section>
  )
}