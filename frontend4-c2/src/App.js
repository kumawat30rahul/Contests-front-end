import React from 'react'
import GenreFilter from './components/GenreFilter'
import './App.css'

function App() {
  const genres = [ "Drama", "Crime", "Action", "Fantasy", "Western", "Science Fiction", "Thriller", "War", "Animation", ];
  return (
    <div className='app'>
      <h1 className='app_title'>Top 15 Movies of All time</h1>
      <GenreFilter  genresArray={genres}/>
    </div>
  )
}

export default App