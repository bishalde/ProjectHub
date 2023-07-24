import React from 'react'
import { Link } from 'react-router-dom'
import './SignupForm.css'

function SignupForm() {
  return (
    <section className="signupframe">
        <div className="loginbox">
            <form action="#" method="post">
            <h1>Register</h1>
                <label htmlFor="username">Username</label>
                <input type="text" id='username' placeholder='Enter Username'/>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' placeholder='Enter Email'/>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' placeholder='Enter Password'/>
                <div className="login-btns">
                    <button className='btn-sec' type="submit">Register</button>
                    <Link to="/login">
                    <button type='button'>Login</button>
                    </Link>
                </div>
            </form>
        </div>
    </section>
  )
}

export default SignupForm