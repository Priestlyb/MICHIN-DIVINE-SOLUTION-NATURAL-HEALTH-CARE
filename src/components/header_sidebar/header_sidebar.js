import React from 'react'
import "./header_sidebar.css"
import logo from "./logo1.png"

function HeaderSidebar() {
  return (
    <>
    <div className='header_sidebar'>

      <div className='header_sidebar__title'>
        <img src={logo} alt='logo' width="100%" />
      </div>

      <div className='header_sidebar__footer'>


        <h2>|</h2>

        <br />
        <br />

        <a href='https://www.tiktok.com/@huntamazonfinds' target='blank' className='tiktok_icon'><i className="fab fa-facebook"></i></a>

        <br />
        <br />

        <a href='https://www.instagram.com/huntamazonfinds/' target='blank' className='instagram_icon'><i className="fab fa-instagram"></i></a>

      </div>

    </div>

    <div className='header_footer text-light'>
      <h3>The Summer of You</h3>

      <div className='row'>
        <div className='col-6'>
          <p>Earn double uppoints every day from women</p>
        </div>
        <div className='col-6 header_footer_left'>
          <a href='/about' >LEARN MORE</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default HeaderSidebar