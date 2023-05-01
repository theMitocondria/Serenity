import React from 'react';
import { Outlet, Link } from "react-router-dom";
export default function () {
  return (
    <div className='borders'>
        <div className='lefthome'>
        <div className='title-box' >
                    <p id="treat-title">Serenity</p>
                    <span><img className='title-image' src='https://cdn-in.icons8.com/yPqGjFz4y06lAX9IolKbzw/hNA9-68M2k-JFUk7QeEaDg/pngtree-disposable-cup-vector-illustration-with-simple-black-line-design-drink-icon-png-image_5222453.png' alt='...'/></span>
                </div>
                <div>
                    <figcaption className="blockquote-footer figsize font">
                    Calmness in recreating yourself
                    </figcaption>
                </div>
                <div>
                    <p className='hometext'>
                    With such a stressful lifestyle, it is a basic need to take some time out to rest, rejuvenate and revive the serenity!!
                    </p>
                </div>
                    <Link to="/menu" id="link">Take A Break </Link>
        </div>

        <div>
            <img className='homeimg' src='https://cdn-in.icons8.com/yPqGjFz4y06lAX9IolKbzw/s2bVxLF47UiRAAETU4LEBA/Image.png'/>
        </div>
        <Outlet />
    </div>
  )
}
