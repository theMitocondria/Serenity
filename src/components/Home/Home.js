import React from 'react'
import { useRef } from 'react';
import Homepage from "./Homepage"
import Homepagemd from "./Homepagemd"

function Home() {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return (
    <div>
      {
            (windowSize.current[0] > windowSize.current[1]) ? <Homepage/> :  <Homepagemd/>
    }
    </div>
  )
}

export default Home