import React from 'react'
import { Link } from 'react-router-dom'

const SectionTwo = () => {
    return (
        <div className='container second-container'>
            <div className="image-section">

                <span className='box'>
                    <h1 className="display-1 fw-medium">SHOP ONLINE</h1>
                    <h1 className="display-5">IN THIS</h1>
                    <h1 className="display-1">DIWALI</h1>
                    <h1 className='display-6 fw-lighter'>UPTO 70% OFF ON ALL PRODUCTS</h1>
                    <span className='offer'>
                        <Link to={'/productcontainer'}>
                            <button className="btn btn-danger btn-lg rounded-4 shop-btn">SHOP NOW</button></Link>

                    </span>
                </span>
            </div>
            <div className='text-section'>

                <img src="https://img.freepik.com/free-photo/woman-holding-shopping-bags-with-copy-space_23-2148647644.jpg?size=626&ext=jpg&ga=GA1.1.684538137.1697068800&semt=ais"
                    alt="" />
            </div>



        </div>
    )
}

export default SectionTwo