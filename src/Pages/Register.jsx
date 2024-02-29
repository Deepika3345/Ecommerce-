import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../features/auth/authSlice'


const Regsiter = () => {

  const { user, isLoading, isSuccess } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  })

  const { name, email, password, password2 } = formData

  const handlechange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      console.log("error")
    }

    dispatch(registerUser(formData))
  }

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/")
    }

  }, [user])


  if (isLoading) {
    return (
      <Typography variant='h1' sx={{ textAlign: "center" }}>Loading...</Typography>
    )
  }




  return (
    <section className='register-container'>

      <form style={{ padding: "50px" }} className='form-register' onSubmit={handleSubmit}>
        <Typography variant='h3' sx={{ textAlign: "center" }}> Register</Typography>
        <TextField id="outlined-basic" label="Enter Name" variant="outlined" sx={{ marginTop: "20px" }}
          required fullWidth name='name' value={name} onChange={handlechange} />
        <TextField id="outlined-basic" label="Enter Email" variant="outlined" sx={{ marginTop: "10px" }}
          required fullWidth name='email' value={email} onChange={handlechange} />
        <TextField id="outlined-basic" label="Enter Password" variant="outlined" sx={{ marginTop: "10px" }}
          required fullWidth name='password' value={password} onChange={handlechange} />
        <TextField id="outlined-basic" label="Confirmed Password" variant="outlined" sx={{ marginTop: "10px" }}
          required fullWidth name='password2' value={password2} onChange={handlechange} />

        <Button variant='outlined' type='submit' sx={{ marginTop: "10px" }} fullWidth > Register

        </Button>

      </form>
    </section>
  )
}

export default Regsiter