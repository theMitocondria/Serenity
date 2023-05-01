import React from 'react'
import {SiApplemusic} from "react-icons/si";
import {BsFillPlayCircleFill} from "react-icons/bs";
import {ImBooks} from "react-icons/im";
import {GiMeditation} from "react-icons/gi";
import { Link } from 'react-router-dom';
import {AiFillHome} from "react-icons/ai";
import "./navbar.css";

function Navbar() {
  return (
    <div className='nav'>
        <ul className='floating-nav'>
            <li><Link  to="/music" className='linkto'><SiApplemusic color="white"/></Link></li>
            <li><Link to="/movies" className='linkto'><BsFillPlayCircleFill color="white"/></Link></li>
            <li><Link to="/books" className='linkto'><ImBooks color="white"/></Link></li>
            <li><Link to="/exercise" className='linkto'><GiMeditation color="white"/></Link></li>
            <li><Link to="/" className='linkto'><AiFillHome color="white"/></Link></li>
        </ul>
    </div>
  )
}

export default Navbar;