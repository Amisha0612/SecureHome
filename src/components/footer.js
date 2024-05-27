import React from 'react';

function Footer() {
    return (
      <>
      <footer>
        <div style={{display:"flex",marginBottom:"30px"}} className='footerDiv'>
          <div className='FirstlistDiv' style={{marginLeft:"200px"}}>
            <li style={{fontWeight:"bold",marginBottom:"10px"}}>COMPANY</li>
            <li style={{marginBottom:"10px",fontSize:"15px"}}>About Us</li>
            <li style={{marginBottom:"10px",fontSize:"15px"}}>Careers</li>
            <li style={{marginBottom:"10px",fontSize:"15px"}}>News</li>
            <li style={{marginBottom:"10px",fontSize:"15px"}}>Contact</li>
          </div>

          <div className='FirstlistDiv' style={{marginLeft:"120px"}}>
            <li style={{fontWeight:"bold",marginBottom:"10px"}}>RESOURCES</li>
            <li style={{marginBottom:"10px",fontSize:"15px"}}>Event</li>
            <li style={{marginBottom:"10px",fontSize:"15px"}}>Blog</li>
            <li style={{marginBottom:"10px",fontSize:"15px"}}>NewsLetter</li>
          </div>

          <div className='FirstlistDiv' style={{marginLeft:"120px"}}>
            <li style={{fontWeight:"bold",marginBottom:"10px"}}>COMMUNITY</li>
            <li style={{marginBottom:"10px",fontSize:"15px"}}>Feedback</li>
            <li style={{marginBottom:"10px",fontSize:"15px"}}>Moderator</li>
            <li style={{marginBottom:"10px",fontSize:"15px"}}>Merch</li>
            <li style={{marginBottom:"10px",fontSize:"15px"}}>Support</li>
            <li style={{marginBottom:"10px",fontSize:"15px"}}>Help Center</li>
          </div>


          <div className='FirstlistDiv' style={{marginLeft:"120px"}}>
            <li style={{fontWeight:"bold",marginBottom:"10px"}}>POLICIES</li>
            <li style={{marginBottom:"5px",fontSize:"15px"}}>Terms</li>
            <li style={{marginBottom:"5px",fontSize:"15px"}}>Privacy</li>
            <li style={{marginBottom:"5px",fontSize:"15px"}}>Guidelines</li>
            <li style={{marginBottom:"5px",fontSize:"15px"}}>Licences</li>
            </div>

            <div style={{marginLeft:"150px",position:"absolute",top:"20px",left:"870px"}}>
            <h1>SecureHome</h1>
            <p style={{fontSize:"15px"}}>SecureHome, a safety solution for women and elderly care,<br/>provides innovative security measures aimed at enhancing the  <br/> safety and well-being of women and seniors both at home & in public.</p>
          </div>

        </div>
      </footer>
      </>
    )
}

export default Footer;