'use client';
import React, { useEffect } from 'react'
import Hero from './hero/Hero'
import Updates from './update/Updates'
import Eperience from './experience/Eperience'
import Feature from './feature/Feature';
import Aos from 'aos';
import "aos/dist/aos.css";

const Home = () => {

useEffect(() => {
  Aos.init({
    duration: 1000,
    easing: "ease",
    once: true,
    anchorPlacement: "top-bottom",
  });
}, []);

  return (
    <div>
        <Hero/>
        <Updates/>
        <Eperience/>
        <Feature/>
    </div>
  )
}

export default Home