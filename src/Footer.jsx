import React from 'react'

const Footer = () => {
  return (


    // last page

    <section className="sell">
      <ul className="store">
        <li>Phones </li>
        <hr />
        <li>Store</li>
        <hr />
        <li>Support</li>
        <hr />
        <li>Explore</li>
        <hr />
        <li>Programs</li>
        <hr />
      </ul>
      <span className="bank">
        <span className="net">
          <button  className='btn btn-success btn-sm'> <i className="bi bi-credit-card-2-back"></i>&nbsp;Credit/Debit Card</button>&nbsp;
          <button  className='btn btn-success btn-sm'><i className="bi bi-house-gear-fill"></i>&nbsp;NetBanking</button>&nbsp;
          <button  className='btn btn-success btn-sm'><i className="bi bi-record-circle-fill"></i>&nbsp;EMI</button>&nbsp;
          <button  className='btn btn-success btn-sm'><i className="bi bi-wallet-fill"></i>&nbsp;Wallet</button>
        </span>

        <span className="contact">
          <button className='btn btn-primary btn-sm rounded-5'
          >  Contact
            Us  </button> 
          <hr />
          <div className="fb">
            <button ><a href="https://www.facebook.com/"><i className="bi bi-facebook"></i></a></button>
            <button><a href="https://www.instagram.com/"><i className="bi bi-instagram"></i></a></button>
            <button><a href="https://about.twitter.com/en"><i className="bi bi-twitter"></i></a></button>
          </div>

        </span>
      </span>
      <hr />
      <div className="inr">
        <span className="odd">
          <h1> India ( English / INR )</h1>
          <hr />
          <p>© 2013 - 2023 OnePlus. All Rights Reserved.</p>
        </span>
        <span className="policy">
          <ul className="terms">
            <li>Privacy Policy</li>
            <li>User Agreement</li>
            <li>Terms of Sales</li>
            <li>E-waste management</li>
            <li>Security Feedback</li>
          </ul>
          <img src="assets/end.svg" alt="" />
        </span>

      </div>


    </section>
  )
}

export default Footer