import React from 'react';
import footerimage from '../images/footerImage.jpeg';

function FAQSection(){
    return(
        <>
        <div>
            <img src={footerimage} alt='img' style={{width:"100%",height:"180px"}}/>
            <p style={{position:"absolute",bottom:"-2235px",left:"650px",color:"#fff",fontSize:"30px", fontWeight:"400px", textAlign:"centre", letterSpacing:"1px"}}>SAFETY TIPS</p>
        </div>
        </>
    )
}

export default FAQSection;