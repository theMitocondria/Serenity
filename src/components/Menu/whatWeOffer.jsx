import React from 'react';
import {Link,Outlet} from 'react-router-dom';
import {Data} from "./Data";
import Card from "./card";
import "./whatWeOffer.css";
import Navbar from '../navbar/navbar';

function whatWeOffer() {
  return (
    <div className='extraspace'>
    <Navbar />    
    <div className=' borders-whatweoffers height-full fixed extraspace'>

        <div className='whatoffer-top'>
          <div className='top-heading'>
                Our Shelf:
          </div>
          <div className='whatweoffer-floatleft'>
          <div className='stack'>
          <Link to="/about" className='treat-link'>
              <img src="https://cdn-in.icons8.com/yPqGjFz4y06lAX9IolKbzw/V-dRDb_IhEeX2qM9VfeBEw/pngtree-disposable-cup-vector-illustration-with-simple-black-line-design-drink-icon-png-image_5222453.png" alt="" sizes="" srcset="" />
          </Link>
          <p className='text-center style'>
            About Us
          </p>
          </div>
          </div>
        </div>

       <div className='benaam'>
       {
        Data.map(element=>(
          <Card  {...element} key={element.id}/>
        ))
      }
       </div>

       <div >
        <button className='treat'>
          <Link to="/treat" className='treat-link'>Give us a treat</Link>
        </button>
       </div>
      
      

      
      <Outlet/>
    </div>
    </div>
  )
}

export default whatWeOffer