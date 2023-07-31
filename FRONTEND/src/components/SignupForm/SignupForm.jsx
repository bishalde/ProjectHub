import React,{useState} from 'react'
import axios from 'axios';
import { Link , useNavigate } from 'react-router-dom'
import './SignupForm.css'

function SignupForm() {
  const URL = 'http://localhost:5741/projecttree'
  const [userName, setUsername] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    
    await axios.post(`${URL}/signup`, { username: userName, email: Email, password: Password })
    .then(response => {
      if(response.status === 201){
        alert("User Created Successfully")
        navigate("/Login")
      }
    })
    .catch(error => {
     alert("ERROR: " + error.response.data.error)
    }
    );

  
  }
  
  

  return (
    <section className="signupframe">
        <div className="loginbox">
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
                <label htmlFor="username">Username</label>
                <input type="text" id='username' placeholder='Enter Username' name='username' minLength={4} value={userName}  onChange={(e)=>{setUsername(e.target.value)}}/>
                               
                <label htmlFor="email">Email</label>
                <input type="email" id='email' placeholder='Enter Email' name='email' value={Email}  onChange={(e)=>{setEmail(e.target.value)}}/>
                
                      
                <label htmlFor="password">Password</label>
                <input type="password" id='password' placeholder='Enter Password' minLength={6}   name='password' value={Password}  onChange={(e)=>{setPassword(e.target.value)}}/>
                <div className="login-btns">
                    <button className='btn-sec' type='submit' >Register</button>
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