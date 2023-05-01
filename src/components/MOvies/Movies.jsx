import React from 'react'
import { useState } from 'react';
import './Movies.css';
import Card from './Card.jsx';
import Navbar from '../navbar/navbar';
import {Data} from './Data.js'

const Movies = () => {

  const [movie, setmovie] = useState(Data);

  const filterMovies = (themeee) => {
    const newmovie = Data.filter((movie) => {
      return movie.theme === `${themeee}`
    })
    setmovie(newmovie)
  }



  return (
    <div>
      <Navbar /> 
        <p className='movie-title'>The Theatre.</p>
        <div className="filterMovie">
        <button className="movie-btn" onClick={()=>{setmovie(Data)}}>All</button>
        <button className="movie-btn" onClick={() => {filterMovies("Crime")}}>Crime</button>
        <button className="movie-btn" onClick={() => (filterMovies("Comedy"))}>Comedy</button>
        <button className="movie-btn" onClick={() => (filterMovies("Thriller"))}>Thriller</button>
        <button className="movie-btn" onClick={() => (filterMovies("Motivational"))}>Motivational</button>
      </div>
      <div className="moviecard">
        {movie.map((item, index) => {
          return (
            <Card
              key={index}
              id={item.id}
              theme={item.theme}
              name={item.name}
              link={item.link}
              posterLink={item.posterLink}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Movies