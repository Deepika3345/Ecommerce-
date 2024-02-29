import React, { useContext, useEffect } from 'react'
import ProductCart from '../ProductCart';
import { fetchCategoryProducts } from '../Context/ShopAction';
import ShopContext from '../Context/ShopContext';

const Jewellery = () => {
  const { products, dispatch } = useContext(ShopContext);
  const getElectronics = async (category) => {
    const data = await fetchCategoryProducts(category);
    dispatch({
      type: "GET_ITEMS",
      payload: data,
    });
  };

  useEffect(() => {
    getElectronics("jewelery");
  }, []);

  if (!products) {
    return (
      <div className="container">
        <h1 className="all-products-title">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container items-container">
      <h1 className="all-products-title">Jewellery</h1>
      <div className='stock'>
        {products.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Jewellery