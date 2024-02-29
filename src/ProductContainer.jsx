import React, { useContext, useEffect } from 'react'
import ProductCart from './ProductCart'
import ShopContext from './Context/ShopContext'
import { fetchItems } from './Context/ShopAction'

const ProductContainer = () => {

  const { products, dispatch } = useContext(ShopContext)

  const getDataProducts = async () => {
    const data = await fetchItems()

    dispatch({
      type: "GET_ITEMS",
      payload: data,
    })

  }
  useEffect(() => {
    getDataProducts()

  }, [])
  return (

    <div className="container everything  ">
      {/* <div className="card  "> */}
      <div className=" row">
        <h1 className="all-products-title ">All Products</h1>
        {
          products.map((product) => <ProductCart key={product.id} product={product} />)
        }
      </div>
    </div>
    //  </div>
  )
}

export default ProductContainer