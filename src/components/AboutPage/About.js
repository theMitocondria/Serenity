import React from 'react'
import "./About.css";
import {BsLinkedin} from "react-icons/bs";
import dhruv from "./dhruv.jpeg";
import piyush from "./w.jpeg";
import tisha from "./tisha.jpeg";
import gautam from "./gautam.jpeg";
import {BsGithub} from "react-icons/bs";
import Navbar from '../navbar/navbar';
export default function About() {
  
  const btnstyle = {backgroundColor:"none"};
  
  return (
    <div>
      <Navbar/>
    <div className='full-padding'>
        <div className='about-ot border-bottom border-danger'>Our Team</div>
        <div id="carouselExampleControls" className="carousel slide container-padding" data-ride="false">
            <div className="carousel-inner about-shadow">
                <div className="carousel-item item active">
                  <div className='item1'>
                    <div className='image info'>
                      <img className="about-img" src={piyush}/>
                      <div className='about-stack'>
                          <div className = "about-block ">
                            <div className="h2">Piyush Arora </div>
                                   <a target="_blank" href='https://www.linkedin.com/in/piyush-arora-378986259/' className='about-btn ms-auto'><BsLinkedin style={{height:"100%",width:"100%"}}/></a>
                                   <a target="_blank" href='https://github.com/Piyusharora2003' className='about-btn'><BsGithub style={{height:"100%",width:"100%"}}/></a>
                          </div>
                          <div className='about-des'>
                              I am Piyush Arora, co-developer of Serenity. I study at JC Bose University of Science and Technology, YMCA Faridabad, Computer Engineering with Data Science branch. My keen interest in web development attracted me towards GeeksForGeeks hackathons. This website is a contribution in the "Solving For India" Hackathon. By building this website my motto is to give a serene experience to our customers.
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item item ">
                  <div className='item1'>
                    <div className='image info'>
                      <img className="about-img" src={dhruv}/>
                      <div className='about-stack'>
                          <div className = "about-block ">
                            <div className="h2">Dhruv Mehta </div>
                                   <a target="_blank" href='https://www.linkedin.com/in/dhruv-mehta-a6b20322a/' className='about-btn ms-auto'><BsLinkedin style={{height:"100%",width:"100%"}}/></a>
                                   <a target="_blank" href='https://github.com/theMitocondria' className='about-btn'><BsGithub   style={{height:"100%",width:"100%"}}/></a>
                          </div>
                          <div className='about-des'>
                          I am Dhruv Mehta, co-developer of Serenity. I study at JC Bose University of Science and Technology, YMCA Faridabad, Computer Engineering with Data Science branch. My keen interest in web development attracted me towards GeeksForGeeks hackathons. This website is a contribution in the "Solving For India" Hackathon. By building this website my motto is to give a serene experience to our customers.
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="carousel-item item ">
                  <div className='item1'>
                    <div className='image info'>
                      <img className="about-img" src={tisha}/>         
                      <div className='about-stack'>
                          <div className = "about-block ">
                            <div className="h2">Tisha Garg</div>
                                   <a target="_blank" href='https://www.linkedin.com/in/tisha-tisha-4b207322a' className='about-btn ms-auto'><BsLinkedin style={{height:"100%",width:"100%"}}/></a>
                                   <a target="_blank" href='https://github.com/Tisha6661' className='about-btn'><BsGithub   style={{height:"100%",width:"100%"}}/></a>
                          </div>
                          <div className='about-des'>
                              I am Tisha Garg, co-developer of Serenity. I study at JC Bose University of Science and Technology, YMCA Faridabad, Computer Engineering with Data Science branch. My keen interest in web development attracted me towards GeeksForGeeks hackathons. This website is a contribution in the "Solving For India" Hackathon. By building this website my motto is to give a serene experience to our customers.
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item item ">
                  <div className='item1'>
                    <div className='image info'>
                      <img className="about-img" src={gautam}/>
                      <div className='about-stack'>
                        <div className = "about-block ">
                          <div className="h2">Gautam Khatri </div>
                                 <a target="_blank" href='https://www.linkedin.com/in/gautam-khatri-873131222/' className='about-btn ms-auto'><BsLinkedin style={{height:"100%",width:"100%"}}/></a>
                                 <a target="_blank" href='https://github.com/exception73' className='about-btn'><BsGithub   style={{height:"100%",width:"100%"}}/></a>
                        </div>
                        <div className='about-des'>
                            I am Gautam Khatri, co-developer of Serenity. I study at JC Bose University of Science and Technology, YMCA Faridabad, Computer Engineering with Data Science branch. My keen interest in web development attracted me towards GeeksForGeeks hackathons. This website is a contribution in the "Solving For India" Hackathon. By building this website my motto is to give a serene experience to our customers.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon red" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon red" aria-hidden="true" ></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    </div>
  )
}
