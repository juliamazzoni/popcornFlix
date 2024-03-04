import FavouriteCard from "./FavouriteCard"


export default function Favourites(props) {


  let favouriteCount = props.favourites.length

  return (
    <section className="section">
      <h1>Favourites <span className="sub-text">You have {favouriteCount} items in your list</span> </h1>
      <div className="row-container">
        
        {props.favourites.map(movies => 
          <FavouriteCard key={movies.id} onDelete={props.onDelete} movies={ movies }/>
        )}
        
      </div>
    </section>
  )
}