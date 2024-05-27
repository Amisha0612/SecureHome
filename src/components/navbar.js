// import React from 'react';
// // import { Link } from 'react-router-dom';

// function Navbar(){
//     return(
//         <>
//         <header>
//         <h1 className="logo">SecureHome</h1>
//         <nav>
//             <ul className="nav__links">
//                 <li><a href="#Home">Home</a></li>
//                 <li><a href="#about">About</a></li>
//                 <li><a href="#contact">Contact</a></li>
//                 <li><a href="#service">Services</a></li>
//                 {/* <!-- <li><button className="login"><a href="login.html">Login</a></button></li> --> */}
//             </ul>
//         </nav>
//     </header>
//         </>
//     )
// }

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';


function smoothScroll(target) {
    console.log(target);
    const element = document.getElementById(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    }
}
function Navbar(){
    return(
        <>
        <header>
        <h1 className="logo">SecureHome</h1>
        <nav>
            <ul className="nav__links">
                <li><Link to="#home" onClick={() => smoothScroll('home')}>Home</Link></li>
                <li><Link to="#about" onClick={() => smoothScroll('about')}>About</Link></li>
                <li><Link to="#contact" onClick={() => smoothScroll('contact')}>Contact</Link></li>
                <li><Link to="#service" onClick={() => smoothScroll('service')}>Services</Link></li>
            </ul>
        </nav>
    </header>
        </>
    )
}

export default Navbar;