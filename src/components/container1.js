import React from 'react';
import img1 from '../images/img1.svg';
import img2 from '../images/img2.svg';
import img3 from '../images/img3.svg';
import { Link } from 'react-router-dom';
// import {Link} from 'react';
// import { Navigate } from 'react-router-dom';


function Container1() {
    return (
        <>
            <link
                href='//fonts.googleapis.com/css?family=Brawler|Pacifico|Abril Fatface|Great Vibes|Cardo|Architects Daughter|Righteous'
                rel='stylesheet' type='text/css'/>
                <section className="container">
                    <div className="container1">
                        <div className="text-box">
                            Used by families and individuals from diverse backgrounds worldwide.
                        </div><br />
                        <div className="text-block">
                            <section className="text" style={{ "fontFamily": 'Pacifico' }}>Security</section>
                            <section className="text" style={{ "fontFamily": 'Abril Fatface' }}>Well-Being</section>
                            <section className="text" style={{ "fontFamily": 'Great Vibes' }}>Safety</section>
                            <section className="text" style={{ "fontFamily": 'Cardo' }}>Innovation</section>
                            <section className="text" style={{ "fontFamily": 'Architects Daughter', "marginRight": '0' }}>Care</section>
                        </div>
                        <div className="columns-2">
                            <div className="column-1">
                                <p>Safety First, Always</p>
                                <h1 className="heading">
                                    Innovative Solutions <br />for Home
                                </h1>
                                <button className="btn-get">
                                    <a href="https://www.cpplusworld.com/" target='_blank' rel="noreferrer">Get in Touch</a>
                                </button>
                            </div>
                            <div className="column-2">
                                <p>We're dedicated to enhancing the safety and quality of life for women and the elderly at home. Our suite of security solutions comes packed with advanced technology, ensuring a secure and comfortable environment for all. </p>
                            </div>
                        </div>

                        <div className="columns-3">
                            <div className="column" id="c1">
                                <a href='https://www.amazon.in/safety-gadgets-for-women/s?k=safety+gadgets+for+women' target='_blank' rel="noreferrer">
                                    <img src={img1} alt="image1" /><br />
                                    <p className="h4">Customized Products</p>
                                    <p>Keep yourself safe with trending customized safety products. </p>
                                </a>
                            </div>
                            <div className="column" id="c2">
                                <Link to='PanicButton'>
                                <img src={img2} alt="image2" /><br />
                                <p className="h4">Instant Alerts</p>
                                <p>Receive real-time alerts for any unusual activity at home.</p>
                                </Link>
                            </div>
                            <div className="column" id="c3">
                                <Link to='Healthtracker'>
                                
                                <img src={img3} alt="image3" /><br />
                                <p className="h4">Health Care Monitoring</p>
                                <p>Specialized monitoring solutions to ensure everyone's safety.</p>
                                
                                </Link>
                                
                            </div>
                        </div>


                    </div>
                </section>
            </>
            )
}

            export default Container1;