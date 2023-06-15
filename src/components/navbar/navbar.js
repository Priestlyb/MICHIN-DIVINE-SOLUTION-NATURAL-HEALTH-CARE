import React from 'react';
import logo from "./logo1.png";
import './navbar.css';

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg" id='navbar' data-aos="zoom-in" data-aos-mirror="false">
      <div className="container-fluid">

        <a className="navbar-brand" href="/"><img src={logo} alt='logo' width="50px" /></a>

        <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            
            <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/about">About</a>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="/contactus">
                Contact us!
              </a>
            </li>

            <li className="nav-item active">
              <a href="mailto:cwoaamedia@gmail.com" className="nav_btn_achor">
            <button type="button" className="btn nav_btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Booking a Session</button>
            </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};
