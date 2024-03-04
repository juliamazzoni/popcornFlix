
import MovieTvCard from "./MovieTvCard"


export default function TrendingMovies(props) {


  return (
    <section className="section">
      <h1>Trending movies</h1>
      <div className="row-container">
        {props.trendingMovies.map(movies => 
          <MovieTvCard key={movies.id} onAdd={props.onAdd} movies={ movies }/>
        )}
      </div>
    </section>
  )
}