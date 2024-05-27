// import React from 'react';
// import form_image from '../images/form_image.jpg';

// function FormSection(){
//     return(
//         <>
//         <div style={{display:"flex",marginBottom:"50px",marginTop:"50px"}}>
//         <div style={{marginLeft:"200px"}}>
//             <h1 style={{fontSize:"35px"}}>Get in touch</h1>
//             <p style={{fontSize:"16px",color: "#00000066",fontFamily:"Nunito Sans"}}>Our Friendly team would love to hear from you</p>
//             <form>
//                 <div style={{display:"flex",fontSize:"14px"}}>
//                 <label>First name*</label>
//                 <label style={{marginLeft:"198px"}}>Last name*</label>
//                 </div>
//                 <div style={{display:"flex",marginBottom:"20px"}}>
//                 <input type='text' required  placeholder='First name' style={{marginTop:"5px",height:"40px",width:"200px",borderRadius:"5px",border:"1px solid #00000066",paddingLeft:"10px"}}/>
//                 <input type='text' required placeholder='Last name' style={{marginLeft:"50px",marginTop:"5px",height:"40px",width:"200px",borderRadius:"5px",border:"1px solid #00000066",paddingLeft:"10px"}}/>
//                 </div>
//                 <div style={{marginBottom:"20px"}}>
//                 <label style={{fontSize:"14px"}}>Email*</label><br/>
//                 <input type='email' required placeholder='you@company.com' style={{marginTop:"5px",height:"40px",width:"463px",borderRadius:"5px",border:"1px solid #00000066",paddingLeft:"10px"}}/><br/>
//                 </div>
//                 <div style={{marginBottom:"20px",fontSize:"14px"}}>
//                 <label>Phone number</label><br/>
//                 <input type='tel' required maxLength="11" pattern="[0-9]{5}-[0-9]{5}" inputMode="numeric" placeholder='+91 12345-67890' style={{marginTop:"5px",height:"40px",width:"463px",borderRadius:"5px",border:"1px solid #00000066",paddingLeft:"10px"}}/>
//                 </div>
//                 <div style={{marginBottom:"20px",fontSize:"14px"}}>
//                 <label>Message*</label><br/>
//                 <textarea required placeholder='Message' style={{marginTop:"5px",height:"80px",width:"463px",borderRadius:"5px",border:"1px solid #00000066",paddingLeft:"10px",paddingTop:"10px"}}></textarea>
//                 </div>
//                 <div style={{marginBottom:"20px",fontSize:"14px",color:"#00000066"}}>
//                 <input required type='checkbox' />
//                 <span style={{marginLeft:"5px"}}>You agree to our friendly <a href='/' style={{color:"#00000066"}}>privacy policy</a></span>
//                 </div>
//                 <button style={{marginTop:"5px",height:"40px",width:"463px",borderRadius:"5px",border:"1px solid #000000",paddingLeft:"10px",paddingTop:"0px",backgroundColor:"#000000",color:"#fff",cursor:"pointer"}}>Send message</button>
//             </form>
//         </div>
//         <div style={{marginLeft:"100px",marginTop:"75px"}}>
//             <img src={form_image} alt='img' style={{width:"600px",height:"540px",borderRadius:"10px"}}/>
//         </div>
//         </div>
//         </>
//     )
// }

// export default FormSection;

import React, { useState } from 'react';
import form_image from '../images/form_image.jpg';

function FormSection() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        agreedToPolicy: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5500/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Form data submitted successfully');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                    agreedToPolicy: false,
                });
            } else {
                alert('Failed to submit form data');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting form data');
        }
    };

    return (
        <div style={{ display: 'flex', marginBottom: '50px', marginTop: '50px' }}>
            <div style={{ marginLeft: '200px' }}>
                <h1 style={{ fontSize: '35px' }}>Get in touch</h1>
                <p style={{ fontSize: '16px', color: '#00000066', fontFamily: 'Nunito Sans' }}>
                    Our Friendly team would love to hear from you
                </p>
                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', fontSize: '14px' }}>
                        <label>First name*</label>
                        <label style={{ marginLeft: '198px' }}>Last name*</label>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '20px' }}>
                        <input
                            type='text'
                            name='firstName'
                            required
                            placeholder='First name'
                            value={formData.firstName}
                            onChange={handleChange}
                            style={{
                                marginTop: '5px',
                                height: '40px',
                                width: '200px',
                                borderRadius: '5px',
                                border: '1px solid #00000066',
                                paddingLeft: '10px',
                            }}
                        />
                        <input
                            type='text'
                            name='lastName'
                            required
                            placeholder='Last name'
                            value={formData.lastName}
                            onChange={handleChange}
                            style={{
                                marginLeft: '50px',
                                marginTop: '5px',
                                height: '40px',
                                width: '200px',
                                borderRadius: '5px',
                                border: '1px solid #00000066',
                                paddingLeft: '10px',
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ fontSize: '14px' }}>Email*</label><br />
                        <input
                            type='email'
                            name='email'
                            required
                            placeholder='you@company.com'
                            value={formData.email}
                            onChange={handleChange}
                            style={{
                                marginTop: '5px',
                                height: '40px',
                                width: '463px',
                                borderRadius: '5px',
                                border: '1px solid #00000066',
                                paddingLeft: '10px',
                            }}
                        /><br />
                    </div>
                    <div style={{ marginBottom: '20px', fontSize: '14px' }}>
                        <label>Phone number</label><br />
                        <input
                            type='tel'
                            name='phone'
                            required
                            maxLength='11'
                            pattern='[0-9]{5}-[0-9]{5}'
                            inputMode='numeric'
                            placeholder='+91 12345-67890'
                            value={formData.phone}
                            onChange={handleChange}
                            style={{
                                marginTop: '5px',
                                height: '40px',
                                width: '463px',
                                borderRadius: '5px',
                                border: '1px solid #00000066',
                                paddingLeft: '10px',
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '20px', fontSize: '14px' }}>
                        <label>Message*</label><br />
                        <textarea
                            name='message'
                            required
                            placeholder='Message'
                            value={formData.message}
                            onChange={handleChange}
                            style={{
                                marginTop: '5px',
                                height: '80px',
                                width: '463px',
                                borderRadius: '5px',
                                border: '1px solid #00000066',
                                paddingLeft: '10px',
                                paddingTop: '10px',
                            }}
                        ></textarea>
                    </div>
                    <div style={{ marginBottom: '20px', fontSize: '14px', color: '#00000066' }}>
                        <input
                            type='checkbox'
                            name='agreedToPolicy'
                            checked={formData.agreedToPolicy}
                            onChange={handleChange}
                            required
                        />
                        <span style={{ marginLeft: '5px' }}>
                            You agree to our friendly{' '}
                            <a href='/' style={{ color: '#00000066' }}>
                                privacy policy
                            </a>
                        </span>
                    </div>
                    <button
                        type='submit'
                        style={{
                            marginTop: '5px',
                            height: '40px',
                            width: '463px',
                            borderRadius: '5px',
                            border: '1px solid #000000',
                            paddingLeft: '10px',
                            paddingTop: '0px',
                            backgroundColor: '#000000',
                            color: '#fff',
                            cursor: 'pointer',
                        }}
                    >
                        Send message
                    </button>
                </form>
            </div>
            <div style={{ marginLeft: '100px', marginTop: '75px' }}>
                <img
                    src={form_image}
                    alt='form'
                    style={{ width: '600px', height: '540px', borderRadius: '10px' }}
                />
            </div>
        </div>
    );
}

export default FormSection;
