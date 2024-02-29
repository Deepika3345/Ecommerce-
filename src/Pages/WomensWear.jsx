import React, { useContext, useEffect } from 'react'
import ShopContext from '../Context/ShopContext';
import { fetchCategoryProducts } from '../Context/ShopAction';
import ProductCart from '../ProductCart';

const WomensWear = () => {

  const { products, dispatch } = useContext(ShopContext);
  const getElectronics = async (category) => {
    const data = await fetchCategoryProducts(category);
    dispatch({
      type: "GET_ITEMS",
      payload: data,
    });
  };

  useEffect(() => {
    getElectronics("women's clothing");
  },[]);

  if (!products) {
    return (
      <div className="container">
        <h1 className="all-products-title">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="container items-container">
      <h1 className="all-products-title">Women's Wear</h1>
      <div className='stock'> 
      {products.map((product) => (<ProductCart key={product.id} product={product} />
      ))}
      </div>
    </div>
  )
}

export default WomensWear