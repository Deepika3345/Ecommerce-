import React, { useContext } from 'react'
import ShopContext from './Context/ShopContext'

const ProductCart = ({ product }) => {

    const { dispatch } = useContext(ShopContext)


    const handleAdd = (product) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: { productItem: product, itemQuantity: 1 }
        })
    }

    return (
        <div className=" card all-items-container ">
            <div className="product-card">
                <span>
                    <img id='product-img' src={product.image} className="card-img-top" alt="..." />
                </span>
                <div className="card-body ">
                    <h5 className="card-title">{product.title}</h5>
                    <span className='add-btn'>
                        <p className="card-text">
                            <small className="text-body-secondary">
                                Price:{product.price}</small>
                                </p>
                        <button className=" btn btn-sm btn-dark rounded-5" onClick={()=>handleAdd(product)}> Add to cart</button>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default ProductCart