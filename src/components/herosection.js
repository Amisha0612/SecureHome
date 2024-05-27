import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../images/hero_image.jpg';
// import Signup from './signup';

function HeroSection(){
    return(
        <>
        <section id="hero">
        <section className="text-heading">
            <h1>Empowering <br /> Women's Safety <br /> and Elderly Care!</h1>
        </section>
        <section className="sub-heading">
            SecureHome, a security solution for Women’s <br /> Safety and elderly care offers innovative
            security
            solutions <br /> with the goal of promoting women's and senior people's <br /> security and well-being at home as well as outside.
        </section>
        <div className="btn-group">
            {/* <button className="btn"><a href='./signup'>Sign Up</a></button> */}
            <button className="btn"><Link to="/Signup">SIGN UP</Link></button>
        </div>
        <section className="hero-img">
            <img src={heroImage} alt="heroimage" />
        </section>
        </section>
        </>
    )
}

export default HeroSection;