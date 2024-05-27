import React from 'react';
import dummy_image from '../images/dummy_image.jpg'

function Container2() {
    return (
        <>
            {/* <section classNameName="container3"  style={{display:"flex"}}> */}
            {/* <section classNameName="sub-container3">
            <section classNameName="section-container">
                <p classNameName="para">"I've never felt safer. <br /> SecureHome gives me peace <br /> of mind, especially when I'm <br />away."</p>
            </section> 
        </section> */}
            {/* <section classNameName="section-container1"> */}
            {/* <p classNameName="para1">"Excellent service, easy setup, <br /> and fantastic support. Highly <br />recommend for anyone looking <br /> to enhance home safety." </p> */}
            {/* <p classNameName="para1">"Excellent service, easy setup,  and fantastic support. Highly recommend for anyone looking  to enhance home safety." </p> */}
            {/* <p>Hello Naina</p>
            </section>
    </section> */}


<link
                href='//fonts.googleapis.com/css?family=Brawler|Pacifico|Abril Fatface|Great Vibes|Cardo|Architects Daughter|Nunito Sans|Righteous'
                rel='stylesheet' type='text/css'/>
            <div style={{ display: "flex" ,marginTop:"50px"}}>
                <div style={{ marginLeft: "250px", marginTop: "80px" }}>
                    <h1>"I've never felt safer.<br /> SecureHome gives me peace<br /> of mind, especially when I'm<br /> away."</h1>
                </div>
                <div style={{ border: "1px solid black", width: "400px", marginTop: "70px", marginLeft: "150px", height: "250px" }}>
                    <div style={{marginLeft:"30px",marginTop:"20px"}}>
                    <span className="fa fa-star checked" style={{marginLeft:"5px"}}></span>
                    <span className="fa fa-star checked" style={{marginLeft:"5px"}}></span>
                    <span className="fa fa-star checked" style={{marginLeft:"5px"}}></span>
                    <span className="fa fa-star" style={{marginLeft:"5px"}}></span>
                    <span className="fa fa-star" style={{marginLeft:"5px"}}></span>
                    </div>
                    <p style={{marginLeft:"30px", fontFamily:"Nunito Sans"}}>"Excellent service, easy setup,<br /> and fantastic support. Highly<br /> recommend for anyone looking<br /> to enhance home safety."</p>
                    <div style={{display:"flex"}}>
                        <img src={dummy_image} alt='img' style={{width:"50px",borderRadius:"20px",marginLeft:"25px"}}/>
                    <span style={{fontWeight:700,fontFamily:"Nunito Sans",fontSize:"14px",marginLeft:"10px",marginTop:"20px"}}>John Doe <br/><span style={{fontFamily:"Nunito Sans",fontSize:"12px",marginLeft:"0px"}}>Happy Customer, Safe Homes Co.</span></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Container2;