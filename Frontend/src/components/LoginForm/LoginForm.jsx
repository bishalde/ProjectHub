import React,{useState} from 'react'
import Cookies from 'js-cookie';
import './LoginForm.css'
import axios from 'axios';
import { Link , useNavigate,  } from 'react-router-dom'

function LoginForm() {

  const [userName, setUserName] = useState('')
  const [Password, setPassword] = useState('')

  const navigate = useNavigate()
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    await axios.post('http://localhost:5741/login', { username: userName, password: Password })
    .then(response =>{
      if(response.status === 200){
        Cookies.set('userToken', response.data.token, { expires: 1 })
        navigate('/')
      }
    })
    .catch(error => {
      alert("ERROR: " + error.response.data.error)
     })
  }



  return (
    <section className="loginframe">
        <div className="loginbox">
            <form onSubmit={handleSubmit} method="post">
            <h1>Login</h1>
                <label htmlFor="username">Username</label>
                <input type="text" id='username' placeholder='Enter Username' name='username' minLength='4' value={userName}  onChange={(e)=>setUserName(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" id='password' placeholder='Enter Password' name='password' minLength='6' value={Password}  onChange={(e)=>setPassword(e.target.value)}  />
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