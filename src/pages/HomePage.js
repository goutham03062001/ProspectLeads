import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact';
import Services from './Services/Services';
import Testimonials from "./Testimonials/Testimonials";
import Partners from './Partners/Partners';
import Countdown from './Countdown/Countdown';
import Top from '../components/Top/Top';
import Navigation from "../components/Navigation/Nav";
const HomePage = () => {
  return (
    <>
       
          <Top/>
        <About /> 
        <div className='container'>
          <div className='row'>
          <Services />
          </div>
        </div>
        <Countdown/>
        <Testimonials isFromHomePage = "true"/>
        <Contact isFromHomePage = "true"/>
        <Partners/>
       </> 
    
  )
}

export default HomePage