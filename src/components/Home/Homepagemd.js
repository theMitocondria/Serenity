import React from 'react'
import { Outlet , Link } from 'react-router-dom'

export default function () {
  return (
<>
    <div className='marginmd'>
    <div className='title-box center' >
                    <p id="treat-title">Serenity</p>
                    <span><img className='title-image' src='https://cdn-in.icons8.com/yPqGjFz4y06lAX9IolKbzw/hNA9-68M2k-JFUk7QeEaDg/pngtree-disposable-cup-vector-illustration-with-simple-black-line-design-drink-icon-png-image_5222453.png' alt='...'/></span>
                </div>
                <div>
                    <figcaption className="blockquote-footermd figsize font">
                        --  Calmness in  <cite title="Your Smile is our Reward" ><strong>recreating yourself</strong></cite>
                    </figcaption>
            </div>
            <img className='homeimgmd' src='https://cdn-in.icons8.com/yPqGjFz4y06lAX9IolKbzw/s2bVxLF47UiRAAETU4LEBA/Image.png'/>
            <p className='container fs-large'>
            Stress is a normal part of life, but it doesn't have to control you. Learn how to manage it with our helpful tips
            </p>
            <div className='disbox'>
                
                <Link to="/menu" id='link' className='none-homepage '>Take A Break </Link>
           
            </div>
    </div>
    <Outlet/>
</>
  )
}
