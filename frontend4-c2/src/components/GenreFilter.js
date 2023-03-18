import React from 'react'
import data from './data'
import './genre.css'
import MovieList from './MovieList';

function GenreFilter() {

    let mySet = new Set();

    data.forEach((movie) => {
        mySet.add(movie.genre);
    })

    let newData = Array.from(mySet)

    const genreHandler =(e)=>{
        let genre = e.target.innerText
        console.log(`Filtering by ${genre}`);
    }

  return (
    <>
    <div className='genre_filter'>
        <h3 className='title'>Filter By Genre</h3>
        <div className='filters'>
            {newData.map((genre,index)=>(
                <div className='filter' key={index+1} onClick={genreHandler}>
                    {genre}
                </div>
            ))}
        </div>
    </div>
    <div className='movies'>
        <MovieList />
    </div>
    </>
  )
}

export default GenreFilter