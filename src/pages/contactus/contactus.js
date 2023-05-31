import React from 'react'
import "./contactus.css"
import nurse from "./nurse.png"

function Contactus() {
  return (
    <div className='contactus text-light'>
      <div className='contactus_row'>

        <div>

          <img src={nurse} alt='nurse' className='contactus_img' />

          <div className='contactus_header p-5'>
            <h1>Contacts</h1>
            <p>Use our contact form for all information requests or contact us directly using the contact information below.</p>
            <p>Feel free to get in touch with us via email or phone</p>

            <div className='contactus_location'>
              <div>
                <i class="fa-solid fa-map-location"></i>
              </div>

              <div className='contactus_location_contents'>
                <h2>Our Office Location</h2>
                <p>The Interior Design Studio Company
                  The Courtyard, ​Al Quoz 1,​ Colorado, ​ USA</p>
              </div>

            </div>

            <div className='contactus_location'>
              <div>
                <i class="fa-solid fa-phone-volume"></i>
              </div>

              <div className='contactus_location_contents'>
                <h2>Mobile Phone</h2>
                <p>+ 912 3 567 8987</p>
              </div>

            </div>

          </div>

        </div>

        <div className='contactus_col_left text-dark'>
          <div className='contactus_col_left_row'>

            <h4>We can’t wait to work with you! Drop us a line and we’ll get back to you soon!</h4>

            <div className='form'>

              <label>Name</label> <br />
              <input placeholder='Enter your Name' /> <br /> <br />

              <label>Email</label> <br />
              <input placeholder='Enter a valid email address' width="100%" /> <br /> <br />

              <label>Message</label> <br />
              <textarea placeholder='Enter your message' /> <br />

              <button className='contactus_btn'>Submit your request</button>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Contactus