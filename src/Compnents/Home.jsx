import React, { useState } from 'react'
import profile1 from '../Assets/img/profile1.png'
import profile2 from '../Assets/img/profile2.png'
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
 
 
 


function Home() {
    const [modalOpen, setModal] = useState(false);

    const openModal = () => {
      return setModal(!modalOpen);
    };
    const closeModal = () => {
       return setModal(!modalOpen);
      };
  
     
    return (
        
        <div   className='Home'>

            
            <h1 className="homeheading">Hello Jane</h1>
            <h3 className="homesubhead">How are you doing today? Would you like to share something with the <br /> community 🤗</h3>
            <div id='Homediv' onClick={openModal} className="Homediv">
                <h4>Create post</h4>
                <div  className="secondarydiv">
                    <div className="icondiv">
                        <div className="icon">
                            💬
                        </div>
                    </div>
                    <h5>How are you feeling today?</h5>
                </div>
                <button className='HomeButton' onClick= { {openModal}}
          >Post</button>
                { modalOpen  && (
        <div  >
          <SignupModal  closeModal={setModal} />
        </div>
      )}
               
            </div>
            <div id='Homediv2'onClick={ openModal} className="Homediv">
                <div className="seconddivhead">
                    <div className="profilepic">
                        <img src={profile1} alt=""  height='64px' width='64px'/>

                    </div>
                    <div className="username">
                        <h3>Theresa Webb</h3>
                        <h6>5mins ago</h6>
                    </div>
                </div>
                <div  id='commentsecondrydiv' className="secondarydiv">
                    <div className="icondiv">
                        <div className="icon">
                        👋
                        </div>
                    </div>
                    <h6 id='comment'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum eos hic, accusantium est deleniti, itaque sapiente quisquam quos veritatis autem eveniet molestias consectetur in nihil soluta tempora cum voluptatum ea!</h6>
                </div>

                <div className="commentcount">
                    <div className="commenticon">💬</div>
                    <h5>24 comments</h5>
                </div>


            </div>
            <div id='Homediv2' onClick={openModal} className="Homediv">
                <div className="seconddivhead">
                    <div className="profilepic">
                        <img src={profile2} alt=""  height='64px' width='64px'/>

                    </div>
                    <div className="username">
                        <h3>Marvin McKinney</h3>
                        <h6>8mins ago • Edited</h6>
                    </div>
                </div>
                <div  id='commentsecondrydiv' className="secondarydiv">
                    <div className="icondiv">
                        <div className="icon">
                        😞
                        </div>
                    </div>
                    <h6 id='comment'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum eos hic, accusantium est deleniti, itaque sapiente quisquam quos veritatis autem eveniet molestias consectetur in nihil soluta tempora cum voluptatum ea!</h6>
                </div>

                <div className="commentcount">
                    <div className="commenticon">💬</div>
                    <h5>24 comments</h5>
                </div>


            </div>
         
            

             
        </div>
        
         
         
    )
}

export default Home
