import React from 'react'
import './books.css';
import Navbar from '../navbar/navbar';
import Card from "./card";
import {data} from './data';

const Books = () => {



  return (
    <div>
      <Navbar /> 
      <div className='book-main'>
      <h1 className='Book-title'>The BookShelf</h1>
      <div className='benaa' id='re'>
        {
          data.map(element=>(
            <Card  {...element} key={element.id}/>
            )
          )
        }
      </div>
    </div>
    </div>
  )
}

export default Books