import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { ShopProvider } from './Context/ShopContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Electronics from './Pages/Electronics'
import Jewellery from './Pages/Jewellery'
import MensWear from './Pages/MensWear'
import WomensWear from './Pages/WomensWear'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Regsiter from './Pages/Register'
import ProductContainer from './ProductContainer'


// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <Router>
      <ShopProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='productcontainer' element={<ProductContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Regsiter />} />
          <Route path='/electronic' element={<Electronics />} />
          <Route path='/jewellery' element={<Jewellery />} />
          <Route path='/menswear' element={<MensWear />} />
          <Route path='/womenswear' element={<WomensWear />} />
        </Routes>
        <Footer />
      </ShopProvider>
      {/* <ToastContainer/> */}

    </Router>
  )
}

export default App