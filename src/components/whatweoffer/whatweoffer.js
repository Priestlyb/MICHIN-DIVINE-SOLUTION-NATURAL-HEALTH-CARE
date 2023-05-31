import React from 'react'
import "./whatweoffer.css"
import product from "./product.png"

function Whatweoffer() {
  return (
    <div className='container whatweoffer'>
      <div className='row g-3'>

        <div className='col-12 whatweoffer_title'>
          <h2 className='text-light'>What We Offer</h2>
        </div>

        <div className='col-lg-3 col-sm-6'>
          <div className="card shadow-sm">
            <img src={product} alt='product' className="card-img-top" />
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-3 col-sm-6'>
          <div className="card shadow-sm">
            <img src={product} alt='product' className="card-img-top" />
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-3 col-sm-6'>
          <div className="card shadow-sm">
            <img src={product} alt='product' className="card-img-top" />
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-3 col-sm-6'>
          <div className="card shadow-sm">
            <img src={product} alt='product' className="card-img-top" />
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Whatweoffer;