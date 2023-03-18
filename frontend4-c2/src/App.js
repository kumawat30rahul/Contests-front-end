import React from 'react'
import GenreFilter from './components/GenreFilter'
import './App.css'

function App() {
  return (
    <div className='app'>
      <h1 className='app_title'>Top 15 Movies of All time</h1>
      <GenreFilter />
    </div>
  )
}

export default App