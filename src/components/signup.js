// import './signup.css';
// import form_img1 from '../images/form img1.jpg';
// import React, { useState } from 'react';
// import React, { useState } from 'react';
// import { signup, login } from './api';

// function Signup() {
//     const [bannerTransform, setBannerTransform] = useState("translateX(0%)");
//     const [loginContainerTransform, setLoginContainerTransform] = useState("scale(1)");
//     const [signupContainerTransform, setSignupContainerTransform] = useState("scale(0)");

//     const handleSignupToggleClick = () => {
//         setBannerTransform("translateX(-100%)");
//         setLoginContainerTransform("scale(0)");
//         setSignupContainerTransform("scale(1)");
//     };

//     const handleLoginToggleClick = () => {
//         setBannerTransform("translateX(0%)");
//         setSignupContainerTransform("scale(0)");
//         setLoginContainerTransform("scale(1)");
//     };

//     return (
//         <>
//             <div className="form-container">
//                 <div className="login-container" id="login-container" style={{ transform: loginContainerTransform }}>
//                     <h1 className="title">Log In</h1>
//                     <p className="desc">Login to your account</p>
//                     <div className="input-container">
//                         <input type="email" placeholder="Enter Your Email Address" autofocus="on" />
//                     </div>
//                     <div className="account-controls">
//                         <a href="" >Forgot Password?</a>
//                         <button>Next <i className="fas fa-solid fa-angle-right"></i></button>
//                     </div>

//                     <span className="line"></span>
//                     <span className="other-login-text">Or log in with</span>
//                     <div className="social-logins">
//                         <button className="social-login"><i style={{ "color": "#1e7bf2" }} className="fas fa-brands fa-facebook-f"></i></button>
//                         <button className="social-login"><i style={{ "color": "#ea4335" }} className="fas fa-brands fa-google"></i></button>
//                         <button className="social-login"><i style={{ "color": "#1e7bf2" }} className="fab fa-twitter"></i></button>
//                     </div>
//                     <span className="signup-text">Don't have an account yet? <a id="signup-form-toggler" onClick={handleSignupToggleClick}>Sign up</a></span>
//                 </div>
//                 <div className="placeholder-banner" id="banner" style={{ transform: bannerTransform }}>
//                     <img src={form_img1} alt="" className="banner" />
//                 </div>

//                 <div className="signup-container" id="signup-container" style={{ transform: signupContainerTransform }}>
//                     <h1 className="title">Signup</h1>
//                     <p className="desc">Create your account </p>
//                     <div className="input-container">
//                         <input type="email" placeholder="Enter Your Email Address" />
//                     </div>
//                     <div className="input-container">
//                         <input type="password" placeholder="Enter Your Password" />
//                     </div>
//                     <div className="account-controls">

//                         <button>Next <i className="fas fa-solid fa-angle-right"></i></button>
//                     </div>

//                     <span className="line"></span>
//                     <span className="other-login-text">Or Signup with</span>
//                     <div className="social-logins">
//                         <button className="social-login"><i style={{ "color": "#1e7bf2" }} className="fas fa-brands fa-facebook-f"></i></button>
//                         <button className="social-login"><i style={{ "color": "#ea4335" }} className="fas fa-brands fa-google"></i></button>
//                         <button className="social-login"><i style={{ "color": "#1e7bf2" }} className="fab fa-twitter"></i></button>
//                     </div>
//                     <span className="signup-text">Already have an account? <a id="login-form-toggler" onClick={handleLoginToggleClick}>Login here</a></span>
//                 </div>
//             </div>
//         </>
//     )
// };

// export default Signup;










// import './signup.css';
// import form_img1 from '../images/form img1.jpg';
// import React, { useState } from 'react';
// import { signup, login } from '../api';

// function Signup() {
//     const [bannerTransform, setBannerTransform] = useState("translateX(0%)");
//     const [loginContainerTransform, setLoginContainerTransform] = useState("scale(1)");
//     const [signupContainerTransform, setSignupContainerTransform] = useState("scale(0)");

//     const handleSignupToggleClick = () => {
//         setBannerTransform("translateX(-100%)");
//         setLoginContainerTransform("scale(0)");
//         setSignupContainerTransform("scale(1)");
//     };

//     const handleLoginToggleClick = () => {
//         setBannerTransform("translateX(0%)");
//         setSignupContainerTransform("scale(0)");
//         setLoginContainerTransform("scale(1)");
//     };

//     const handleSignup = async (event) => {
//         event.preventDefault();
//         const email = event.target.email.value;
//         const password = event.target.password.value;
//         try {
//             const response = await signup(email, password);
//             console.log(response);
//             // handle successful signup
//         } catch (error) {
//             console.error(error);
//             // handle signup error
//         }
//     };

//     const handleLogin = async (event) => {
//         event.preventDefault();
//         const email = event.target.email.value;
//         const password = event.target.password.value;
//         try {
//             const response = await login(email, password);
//             console.log(response);
//             // handle successful login
//         } catch (error) {
//             console.error(error);
//             // handle login error
//         }
//     };

//     return (
//         <>
//             <div className="form-container">
//                 <div className="login-container" id="login-container" style={{ transform: loginContainerTransform }}>
//                     <h1 className="title">Log In</h1>
//                     <p className="desc">Login to your account</p>
//                     <form onSubmit={handleLogin}>
//                         <div className="input-container">
//                             <input type="email" name="email" placeholder="Enter Your Email Address" autofocus="on" required />
//                         </div>
//                         <div className="account-controls">
//                             <a href="" >Forgot Password?</a>
//                             <button type="submit">Next <i className="fas fa-solid fa-angle-right"></i></button>
//                         </div>
//                     </form>

//                     <span className="line"></span>
//                     <span className="other-login-text">Or log in with</span>
//                     <div className="social-logins">
//                         <button className="social-login"><i style={{ "color": "#1e7bf2" }} className="fas fa-brands fa-facebook-f"></i></button>
//                         <button className="social-login"><i style={{ "color": "#ea4335" }} className="fas fa-brands fa-google"></i></button>
//                         <button className="social-login"><i style={{ "color": "#1e7bf2" }} className="fab fa-twitter"></i></button>
//                     </div>
//                     <span className="signup-text">Don't have an account yet? <a id="signup-form-toggler" onClick={handleSignupToggleClick}>Sign up</a></span>
//                 </div>
//                 <div className="placeholder-banner" id="banner" style={{ transform: bannerTransform }}>
//                     <img src={form_img1} alt="" className="banner" />
//                 </div>

//                 <div className="signup-container" id="signup-container" style={{ transform: signupContainerTransform }}>
//                     <h1 className="title">Signup</h1>
//                     <p className="desc">Create your account </p>
//                     <form onSubmit={handleSignup}>
//                         <div className="input-container">
//                             <input type="email" name="email" placeholder="Enter Your Email Address" required />
//                         </div>
//                         <div className="input-container">
//                             <input type="password" name="password" placeholder="Enter Your Password" required />
//                         </div>
//                         <div className="account-controls">
//                             <button type="submit">Next <i className="fas fa-solid fa-angle-right"></i></button>
//                         </div>
//                     </form>
//                     <span className="line"></span>
//                     <span className="other-login-text">Or Signup with</span>
//                     <div className="social-logins">
//                         <button className="social-login"><i style={{ "color": "#1e7bf2" }} className="fas fa-brands fa-facebook-f"></i></button>
//                         <button className="social-login"><i style={{ "color": "#ea4335" }} className="fas fa-brands fa-google"></i></button>
//                         <button className="social-login"><i style={{ "color": "#1e7bf2" }} className="fab fa-twitter"></i></button>
//                     </div>
//                     <span className="signup-text">Already have an account? <a id="login-form-toggler" onClick={handleLoginToggleClick}>Login here</a></span>
//                 </div>
//             </div>
//         </>
//     )
// };

// export default Signup;







// import React, { useState } from 'react';
// import { login, signup } from '../api';
// import form_img1 from '../images/form img1.jpg';
// import './signup.css';

// function Signup() {
//     // const navigate = useNavigate();
//     const [bannerTransform, setBannerTransform] = useState("translateX(0%)");
//     const [loginContainerTransform, setLoginContainerTransform] = useState("scale(1)");
//     const [signupContainerTransform, setSignupContainerTransform] = useState("scale(0)");
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [passwordConfirm, setPasswordConfirm] = useState('');
//     const [loginEmail, setLoginEmail] = useState('');
//     const [loginPassword, setLoginPassword] = useState('');
//     const [loginError, setLoginError] = useState('');

//     const handleSignupToggleClick = () => {
//         setBannerTransform("translateX(-100%)");
//         setLoginContainerTransform("scale(0)");
//         setSignupContainerTransform("scale(1)");
//     };

//     const handleLoginToggleClick = () => {
//         setBannerTransform("translateX(0%)");
//         setSignupContainerTransform("scale(0)");
//         setLoginContainerTransform("scale(1)");
//     };

//     const handleSignup = async (event) => {
//         event.preventDefault();
//         if (password !== passwordConfirm) {
//             alert('Passwords do not match');
//             return;
//         }
//         try {
//             const response = await signup(email, password);
//             console.log(response);
//             // handle successful signup

//         } catch (error) {
//             console.error(error);
//             // handle signup error
//         }
//     };

//     const handleLogin = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await login(loginEmail, loginPassword);
//             console.log(response);
//             // handle successful login

//         } catch (error) {
//             console.error(error);
//             setLoginError(error.message);
//         }
//     };


//     return (
//         <>
//             <div className="form-container">
//                 <div className="login-container" id="login-container" style={{ transform: loginContainerTransform }}>
//                     <h1 className="title">Log In</h1>
//                     <p className="desc">Login to your account</p>
//                     <form onSubmit={handleLogin}>
//                         <div className="input-container">
//                             <input type="email" name="email" placeholder="Enter Your Email Address" autofocus="on" required value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
//                         </div>
//                         <div className="input-container">
//                             <input type="password" name="password" placeholder="Enter Your Password" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
//                         </div>
//                         <div className="account-controls">
//                             {/* <a href="" >Forgot Password?</a> */}
//                             <button type="submit">Next <i className="fas fa-solid fa-angle-right"></i></button>
//                         </div>
//                         {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
//                     </form>

//                     <span className="line"></span>
//                     <span className="other-login-text">Or log in with</span>
//                     <div className="social-logins">
//                         <button className="social-login"><i style={{ "color": "#1e7bf2" }} className="fas fa-brands fa-facebook-f"></i></button>
//                         <button className="social-login"><i style={{ "color": "#ea4335" }} className="fas fa-brands fa-google"></i></button>
//                         <button className="social-login"><i style={{ "color": "#1e7bf2" }} className="fab fa-twitter"></i></button>
//                     </div>
//                     <span className="signup-text">Don't have an account yet? <a href id="signup-form-toggler" onClick={handleSignupToggleClick}>Sign up</a></span>
//                 </div>
//                 <div className="placeholder-banner" id="banner" style={{ transform: bannerTransform }}>
//                     <img src={form_img1} alt="" className="banner" />
//                 </div>

//                 <div className="signup-container" id="signup-container" style={{ transform: signupContainerTransform }}>
//                     <h1 className="title">Signup</h1>
//                     <p className="desc">Create your account </p>
//                     <form onSubmit={handleSignup}>
//                         <div className="input-container">
//                             <input type="email" name="email" placeholder="Enter Your Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} />
//                         </div>
//                         <div className="input-container">
//                             <input type="password" name="password" placeholder="Enter Your Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
//                         </div>
//                         <div className="input-container">
//                             <input type="password" name="password" placeholder="Confirm Your Password" required value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
//                         </div>
//                         <div className="account-controls">
//                             <button type="submit">Next <i className="fas fa-solid fa-angle-right"></i></button>
//                         </div>
//                     </form>
//                     <span className="line"></span>
//                     <span className="other-login-text">Or Signup with</span>
//                     <div className="social-logins">
//                         <button className="social-login"><i style={{ "color": "#1e7bf2" }} className="fas fa-brands fa-facebook-f"></i></button>
//                         <button className="social-login"><i style={{ "color": "#ea4335" }} className="fas fa-brands fa-google"></i></button>
//                         <button className="social-login"><i style={{ "color": "#1e7bf2" }} className="fab fa-twitter"></i></button>
//                     </div>
//                     <span className="signup-text">Already have an account? <a href id="login-form-toggler" onClick={handleLoginToggleClick}>Login here</a></span>
//                 </div>
//             </div>
//         </>
//     )
// };

// export default Signup;













import 'normalize.css';
import React, { useState } from 'react';
import { login, signup } from '../api';
import form_img1 from '../images/form img1.jpg';
// import './signup.css';
import '../css/signup.css';
// import styles from './signup.module.css';
import { useNavigate } from 'react-router-dom';
// import {Link}from 'react-router-dom'


function Signup() {
    const [bannerTransform, setBannerTransform] = useState("translateX(0%)");
    const [loginContainerTransform, setLoginContainerTransform] = useState("scale(1)");
    const [signupContainerTransform, setSignupContainerTransform] = useState("scale(0)");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginError] = useState('');
    const navigate = useNavigate();

    const handleSignupToggleClick = () => {
        setBannerTransform("translateX(-100%)");
        setLoginContainerTransform("scale(0)");
        setSignupContainerTransform("scale(1)");
    };

    const handleLoginToggleClick = () => {
        setBannerTransform("translateX(0%)");
        setSignupContainerTransform("scale(0)");
        setLoginContainerTransform("scale(1)");
    };

    const handleSignup = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const passwordConfirm = event.target.passwordConfirm.value;
        if (password !== passwordConfirm) {
            alert('Passwords do not match');
            return;
        }
        try {
            const response = await signup(email, password);
            console.log(response);
            // handle successful signup
            navigate('/');
        } catch (error) {
            console.error(error);
            // handle signup error
        }
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        try {
            const response = await login(email, password);
            console.log(response);
            // handle successful login
            navigate('/');
        } catch (error) {
            console.error(error);
            // handle login error
        }
    };



    return (
        <>
        <div className='form-body'>
            <div className="form-container">
                <div className="login-container" id="login-container" style={{ transform: loginContainerTransform }}>
                    <h1 className="title">Log In</h1>
                    <p className="desc">Login to your account</p>
                    <form onSubmit={handleLogin}>
                        <div className="input-container">
                            <input type="email" name="email" placeholder="Enter Your Email Address" autofocus="on" required value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                            
                            {/* <input type="password" name="password" placeholder="Enter Your Password" autofocus="on" required /> */}
                        </div>
                        <div className="input-container">
                            <input type="password" name="password" placeholder="Enter Your Password" autofocus="on" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                        </div>
                        <div className="account-controls">
                            {/* <a href="" >Forgot Password?</a> */}
                            <button type="submit">Next<i className="fas fa-solid fa-angle-right"></i></button>
                        </div>
                        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
                    </form>

                    <span className="line"></span>
                    <span className="other-login-text">Or log in with</span>
                    <div className="social-logins">
                        <button className="social-login"><i style={{ "color": "#1e7bf2" }} className="fas fa-brands fa-facebook-f"></i></button>
                        <button className="social-login"><i style={{ "color": "#ea4335" }} className="fas fa-brands fa-google"></i></button>
                        <button className="social-login"><i style={{ "color": "#1e7bf2" }} className="fab fa-twitter"></i></button>
                    </div>
                    <span className="signup-text">Don't have an account yet? <button id="signup-form-toggler" onClick={handleSignupToggleClick}>Sign up</button></span>
                </div>
                <div className="placeholder-banner" id="banner" style={{ transform: bannerTransform }}>
                    <img src={form_img1} alt="" className="banner" />
                </div>

                <div className="signup-container" id="signup-container" style={{ transform: signupContainerTransform }}>
                    <h1 className="title">Signup</h1>
                    <p className="desc">Create your account </p>
                    <form onSubmit={handleSignup}>
                        <div className="input-container">
                            <input type="email" name="email" placeholder="Enter Your Email Address" required alue={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-container">
                            <input type="password" name="password" placeholder="Enter Your Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="input-container">
                            <input type="password" name="passwordConfirm" placeholder="Confirm Your Password" required value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                        </div>
                        <div className="account-controls">
                            <button type="submit">Next<i className="fas fa-solid fa-angle-right"></i></button>
                        </div>
                    </form>
                    <span className="line"></span>
                    <span className="other-login-text">Or Signup with</span>
                    <div className="social-logins">
                        <button className="social-login"><i style={{ "color": "#1e7bf2" }} className="fas fa-brands fa-facebook-f"></i></button>
                        <button className="social-login"><i style={{ "color": "#ea4335" }} className="fas fa-brands fa-google"></i></button>
                        <button className="social-login"><i style={{ "color": "#1e7bf2" }} className="fab fa-twitter"></i></button>
                    </div>
                    <span className="signup-text">Already have an account? <button id="login-form-toggler" onClick={handleLoginToggleClick}>Login here</button></span>
                </div>
            </div>
            </div>
        </>
    )
};

export default Signup;    
