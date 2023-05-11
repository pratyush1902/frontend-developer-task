 import React from 'react'
  import logo from '../Assets/img/logo.png'
  import { useNavigate } from 'react-router-dom';
 

 
 function LoginHome() {
    const navigate = useNavigate();
  const handleClick = () => navigate('/Home');
   return (
      <div className="parent">
        <img  id='logo' src={logo} alt="" height="50px" width="50px" />
        <div className="child">
            <h3 id='heading1'>welcome back</h3>
            <h2 id='heading2'>Login into your account</h2>
             
          <form className='Loginform'>
          <div className="input-group">
            <label htmlFor="email">Email or Username</label>
            <input type="email" name="email" placeholder="Enter Email or Username" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            
            <input type="email" name="email" placeholder=" Enter the Password" />
          </div>
          </form>
          <button className="secondary" onClick={handleClick}  >
           Login Now
        </button>
        <h3 id='registerlink'>Not registered yet? Register →</h3>
         
             
            
      
        
        </div>

      </div>
      
   )
 }
 
 export default LoginHome
 