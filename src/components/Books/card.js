import React from 'react';
import "./books.css";
function card(props) {

    let dtaa = (props.info.slice(0,100) + "....")

  return (
      <div className="card card-style inline text-center pb-2 ins ">
        <div className="img-card-size imgdiv">
        <img className="w-100 imgsize" src={props.img} alt="iMage" />
        </div>
        <div className="card-body heightmax">
           <h5 className="titlecard">{props.Name}</h5>
           <p className="card-text titlecarddata ">{dtaa}</p>
           <div className='text-start'>
           <a href={props.add} className="btn btn-secondary ">Read Complete</a>
           </div>
        </div>
      </div>
  )
}

export default card;