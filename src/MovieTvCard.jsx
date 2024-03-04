
export default function MovieTvCard({ movies, onAdd }) {


  return (
    <div className="card">
    <img src={'https://image.tmdb.org/t/p/w500' + movies.poster_path}/>
    <div onClick={() => onAdd(movies)} className="add-delete-btn">add to favourites</div>
    </div>
    
  )
}