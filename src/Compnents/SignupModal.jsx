import {React } from 'react'
 
import closeicon from '../Assets/img/Close.png';

function SignupModal( {  closeModal } ) {
     

     
  return (
    <div className='Modal_wrapper'>
        <div className='loginModal'>
             <div id='child' className="child">
              <div  onClick={()=>{ closeModal(false)}} className="closingbutton">
                <img onClick={()=>{ closeModal(false)}} src={closeicon} alt="" height='20px' width='20px' />
             
                </div>  
                 
            <h3 id='heading1'>SIGN UP</h3>
            <h2 id='heading2'>Create an account to continue</h2>
             
          <form className='Loginform'>
          <div className="input-group">
            <label htmlFor="email">Email </label>
            <input type="email" name="email" placeholder="Enter Email or Username" />
          </div>
          <div className="input-group">
            <label htmlFor="email"> Username</label>
            <input type="email" name="email" placeholder="Enter Email or Username" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            
            <input type="email" name="email" placeholder=" Enter the Password" />
          </div>
          </form>
          <button className="secondary"  >
           Sign Up Now
        </button>
        <div>
        <a id='routetologin' href='#'  
          
         >Already have an account? Login →</a>

        </div>
        
        
             
            
      
        
        </div>
    </div>
    </div>
  )
}

export default SignupModal

