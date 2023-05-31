import React from 'react'
import "./header.css"
import HeaderSidebar from "../header_sidebar/header_sidebar"

function Header() {
  return (
    <>
    <div className='header'>
      <div className='header_cover'></div>
      <div className='header_title'>
        <h1>MICHIN DIVINE SOLUTION NATURAL HEALTH CARE,</h1>
        <h2>
          the most rewarding loyalty
          <br />
          program in the region
        </h2>
        <button type="button" class="header_btn">JOIN NOW</button>
      </div>
      
    </div>

    <HeaderSidebar/>

    </>
  )
}

export default Header;