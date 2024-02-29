import React, { useEffect } from 'react'
import Herosection from '../Herosection'
import ProductContainer from '../ProductContainer'
import SectionTwo from '../SectionTwo'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Container } from '@mui/material'

const Home = () => {

  const { user } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate("/login")
    }

  }, [user])
  return (
    <>
    
        <Herosection />
        <SectionTwo />
        <ProductContainer />
    
    </>
  )
}

export default Home