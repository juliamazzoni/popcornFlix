

import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import TrendingMovies from './TrendingMovies'
import TrendingTvShows from './TrendingTvShows'
import Favourites from './Favourites'
import MoviesByTitle from './MoviesByTitle'
import MoviesByCast from './MoviesByCast'
import Header from './Header'
import _ from 'lodash';


function App() {
 
  let storedItems = JSON.parse(localStorage.getItem('favourites'))

  const [favourites, setFavourites] = useState(storedItems)
  const [trendingMovies, setTrendingMovies] = useState([])
  const [url, setUrl] = useState('')

  useEffect(() => {

    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=780f31c900dd1e4c53a1b6cbfca8804a&language=en-US')
      .then(response => {
        setTrendingMovies(response.data.results)
        const randomImg = _.sample(response.data.results)
        const url = 'https://image.tmdb.org/t/p/w500' + randomImg.backdrop_path
        setUrl(url)
      })
  
  }, [])


  function onAdd(movie) {
    setFavourites([movie, ...favourites])
  
    localStorage.setItem('favourites', JSON.stringify([movie, ...favourites]))
  }

  function onDelete(movie){
    let filteredFavourites = favourites.filter(movies => movies != movie)

    setFavourites(filteredFavourites)
    localStorage.setItem('favourites', JSON.stringify(filteredFavourites))
  }


  return (
    <>
      <Header url={url}/> 
      <TrendingMovies onAdd={onAdd} trendingMovies={trendingMovies} />
      <TrendingTvShows onAdd={onAdd} />
      <Favourites onDelete={onDelete} favourites={favourites} />
      <MoviesByTitle onAdd={onAdd} />
      <MoviesByCast onAdd={onAdd} />
    </>
  )
}

export default App
