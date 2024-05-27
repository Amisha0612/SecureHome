import React from 'react';
// import './Home.css';
import 'normalize.css';
import '../css/Home.css';
import FAQSection from './FAQSection';
import Container1 from './container1';
import Container2 from './container2';
import Container3 from './container3';
import Footend from './footend';
import Footer from './footer';
import FormSection from './formsection';
import HeroSection from './herosection';
import Navbar from './navbar';
import Question from './question';


function Home() {
    return (
        <>
            <link ></link>
            <section id='home'>
                <Navbar />
            </section>

            <section id='about'>
                <HeroSection />
            </section>
            <section id='service'>
                <Container1 />
            </section>
            <Container2 />
            <Container3 />
            <FAQSection />
            <Question />
            <section id='contact'>
                <FormSection />
            </section>
            <Footer />
            <Footend />

        </>
    );
}

export default Home;
