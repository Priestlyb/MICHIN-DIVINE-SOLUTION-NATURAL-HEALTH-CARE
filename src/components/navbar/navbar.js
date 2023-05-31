import React from 'react';
import './navbar.css';

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg" id='navbar' data-aos="zoom-in" data-aos-mirror="false">
      <div className="container-fluid">

        <a className="navbar-brand" href="/"><img src="" alt='logo' width="40px" /></a>

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
                <button type="button" class=" nav_btn">Booking a Session</button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};
