import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logInUser } from '../features/auth/authSlice'
import { Typography } from '@mui/material'
// import { toast } from 'react-toastify'
// import { Toastify } from 'toastify'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const { email, password } = formData

    const handlechange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handlesubmit = (e) => {
        e.preventDefault()

        dispatch(logInUser(formData))
    }

    useEffect(() => {
        if (user || isSuccess) {
            navigate('/')

        }
        if (isError || message) {
            console.log("try again")

        }

    }, [user, isError, isLoading, isSuccess, message])

    if (isLoading) {
        return (<Typography variant='h2'>Load....</Typography>)
    }


    return (


        <div className="card login-container">
            <div className="login-box">

                <h1 className="display-6 text-center w-100 ">Sign in</h1>

                <form className='w-100' onSubmit={handlesubmit}>
                    <input className='form-control '
                        type="text or number" required placeholder='Email or mobile' style={{ marginBottom: "10px" }}
                        name='email' value={email} onChange={handlechange} />

                    <input className='form-control my-1' type="password" placeholder="Enter your password" name='password' value={password} onChange={handlechange} />
                    <button className="btn btn-lg btn-primary w-100">Sign in</button>
                </form>
                <span >
                    <p >No account?
                        <Link to={"/register"}>Create one!</Link>
                        {/* <a href="#" >Create one!</a> */}
                    </p>
                    {/* <a href="#">Can't access your account?</a> */}

                </span>
                <div className="help">
                </div>

                <br />

            </div>

        </div>
    )
}

export default Login