import React from 'react';
import HeaderSidebar from "../header_sidebar/header_sidebar";
import "./header.css";

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
        {/* <a href='/contactus'>
        <button type="button" className="btn header_btn">JOIN NOW</button>
        </a> */}
      </div>
      
    </div>

    <HeaderSidebar/>

    </>
  )
}

export default Header;