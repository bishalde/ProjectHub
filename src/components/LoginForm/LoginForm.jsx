import React from 'react'
import './LoginForm.css'
import { Link } from 'react-router-dom'

function LoginForm() {
  return (
    <section className="loginframe">
        <div className="loginbox">
            <form action="#" method="post">
            <h1>Login</h1>
                <label htmlFor="username">Username</label>
                <input type="text" id='username' placeholder='Enter Username'/>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' placeholder='Enter Password'/>
                <div className="login-btns">
                    <button className='btn-sec' type="submit">Login</button>
                    <Link to="/register">
                    <button type='button'>Register</button>
                    </Link>
                </div>
            </form>
        </div>
    </section>
  )
}

export default LoginForm