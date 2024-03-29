import React from 'react'

function Footer() {
  return (
    <div className='container text-light'>
        <div className="b-example-divider"></div>


<div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Home</a></li>
          <li className="nav-item mb-2"><a href="/about" className="nav-link p-0 text-light">About us!</a></li>
          <li className="nav-item mb-2"><a href="/contactus" className="nav-link p-0 text-light">Contact us</a></li>
        </ul>
      </div>

      <div className="col-md-6 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-dark" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-2 my-2 border-top">
      <p>&copy; {new Date().getFullYear()} Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-light" href="/"><i className="fab fa-facebook" /></a></li>
        <li className="ms-3"><a className="link-light" href="/"><i className="fab fa-instagram" /></a></li>
      </ul>
    </div>
  </footer>
</div>
    </div>
  )
}

export default Footer