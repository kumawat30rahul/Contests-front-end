import React from 'react'
import './movie.css'

function MovieList({movies}) {
  return (
    <div className='movie_list'>
        <table className='table'>
          <thead className='thead'>
            <tr >
              <th >
                MOVIE
              </th>
              <th >
                GENRE
              </th>
              <th >
                YEAR
              </th>
            </tr>
          </thead>
          <tbody className='tbody'>
            {movies.map((movie,index)=>(
              <tr className={`movie${index+1}`} key={index+1}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default MovieList