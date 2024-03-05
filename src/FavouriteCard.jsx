export default function FavouriteCard({ movies, onDelete }) {


  return (
    <div className="card">
    <img src={'https://image.tmdb.org/t/p/w500' + movies.poster_path}/>
    <div onClick={() => onDelete(movies)} className="add-delete-btn">remove from favourites</div>
    </div>
    
  )
}