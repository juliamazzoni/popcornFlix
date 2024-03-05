import { useState, useEffect } from "react"
import MovieTvCard from "./MovieTvCard"
import axios from 'axios'

export default function TrendingTvShows(props) {

  const [trendingTvShows, setTrendingTvShows] = useState([])


  useEffect(() => {

  axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=780f31c900dd1e4c53a1b6cbfca8804a&language=en-US`)
    .then(response => setTrendingTvShows(response.data.results))
}, [])

  return (
    <section className="section">
      <h1>Trending Tv Shows</h1>
      <div className="row-container">
      
        {trendingTvShows.map(movies => 
          <MovieTvCard key={movies.id} onAdd={props.onAdd} movies={ movies }/>
        )}
        
      </div>
    </section>
  )

}