import { useState } from "react"
import MovieTvCard from "./MovieTvCard"
import axios from 'axios'

export default function MoviesByCast(props) {


  const [cast, setCast] = useState('')
  const [moviesByCast, setMoviesByCast] = useState([])


  function handleChange(e){
    setCast(e.target.value)
  }  

  function handleSubmit(e) {
    e.preventDefault()

    axios.get(`https://api.themoviedb.org/3/search/person?api_key=780f31c900dd1e4c53a1b6cbfca8804a&query=${cast}`)
      .then(response => axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=780f31c900dd1e4c53a1b6cbfca8804a&with_cast=${response.data.results[0].id}`))
      .then(response => setMoviesByCast(response.data.results)) 

      setCast('')
  }


  return (
    <section className="section">
      <h1>Search movies by cast<span className="sub-text">{moviesByCast.length} movies found </span></h1>

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={cast}/>
        <button>find movie</button>
      </form>

      <div className="row-container">
        
        {moviesByCast.map(movies => 
          <MovieTvCard key={movies.id} onAdd={props.onAdd} movies={ movies }/>
        )}
        
      </div>


    </section>
  )
}