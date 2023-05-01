import React from 'react'
import { Link } from 'react-router-dom'
function card(props) {
  const stylee ={
    backgroundColor : props.bgcolor,
  }
  return (
      <>
    <div className="card card-style inline pb-2" style={stylee} >
  <img className="card-img-top m-5 image-card" src={props.image} alt="Card image cap"/>
  <div className="card-body">
    
    <p className="card-text">{props.info}</p>
    <div className='mid'>
    <Link to={props.link} className="btn btn-danger ">{props.title}</Link>
    </div>
  </div>
</div>
</>
  )
}

export default card