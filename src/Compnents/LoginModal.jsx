import React from 'react'

function LoginModal() {
  return (
    <>
    <div className="Modalwrapper"></div>
    <div className='loginModal'>
             <div id='child' className="child">
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
          <button className="secondary"  >
           Login Now
        </button>
        <h3 id='registerlink'>Not registered yet? Register →</h3>
         
             
            
      
        
        </div>
    </div>
    </>
  )
}

export default LoginModal
