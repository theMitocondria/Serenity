import React from 'react'
import { Link } from 'react-router-dom';
import "./treat.css"

import Navbar from '../navbar/navbar';
function treat() {
  return (
    <div className='full-page'>
      <Navbar />
      {/* main body */}
      <div className='main-treat'>
          {/* left part */}
          <div className="width-60vw borderr">
                 <div>
                      <p id="title-home" className='treat-title'>Serenity</p>
                 </div >
                 <div className='info-treat'>
                 It’s great to have you with us today. Thank you for investing your time in recreation. Your peace is in your hands, and just a click ahead. If you have had a good experience with us then make a contribution to the developers of serenity in the form of happiness. Get us a kitkat, to celebrate our success with something sweet. It's always a delight to have a break and have a kitkat.
                 <h3 className='italics'>Have A Break, Have A Kit Kat"</h3>
                 </div>
          </div>
        {/* right park */}
          <div className='frow width-40vw'>
                <div>
                      <div className='right'>
                      <div className='stack'>
          <Link to="/about" className='treat-link'>
              <img src="https://cdn-in.icons8.com/yPqGjFz4y06lAX9IolKbzw/V-dRDb_IhEeX2qM9VfeBEw/pngtree-disposable-cup-vector-illustration-with-simple-black-line-design-drink-icon-png-image_5222453.png" alt="" sizes="" srcset="" />
          </Link>
          <p className='text-center style'>
            About Us
          </p>
          </div>                      </div>
                </div>
                <div className='mid mt-3' >
                    <img src="https://cdn-in.icons8.com/yPqGjFz4y06lAX9IolKbzw/iQZzHC1j9UWn7kRKOHoIFw/Image_3.png" className='payment-img' alt="" />
                    <h2 className='mt-4'>Buy Our Team a KitKat❤️</h2>
                    <div className='center'>
                        <a href='upi://pay?pa=9319014580@ybl&pn=&cu=INR&am=40' className='pay-bt pay_link border-none' id='link'>Treat Us</a>
                    </div>
                </div>
          </div>
      </div>
    </div>
  )
}

export default treat