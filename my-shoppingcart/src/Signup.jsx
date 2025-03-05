import './styles/Signup.css'
import Footer from './Footer';
import { Link } from "react-router-dom";
import signup from "./assets/signup.jpg";

const Signup = () => {
    return(
       <>
       <div className='parent'>
       <div className="signupcontainer">
        <div className='imagecontainer'>
            <img src={signup} alt="signup" />
            <div className='signshadow'></div>
        </div>
        <div className='signupdetailscontainer'>
            <form className='signcon'>
            <div className='topsign'>
            <h1>Sign Up</h1>
            <p>Lorem ipsum dolor sit amet</p>
            </div>

            <div className='inputcontainer fir'><input placeholder='Email'></input></div>
            <div className='inputcontainer sec'><input placeholder='Create Password'></input></div>
            <div className='inputcontainer thi'><input placeholder='Confirm Password'></input></div>
            <div className='inputcontainer for'><input placeholder='Phone number'></input></div>


            <div className='signbtncontainer'>
                <button>Create Account</button>
            </div>
            <div className='tosignin'>
                <p>Already have an account? </p>
                <p className='signin'><Link className='in' to='/signin'>Sign In</Link></p>
            </div>
            </form>
           
            

        </div>
       </div>
       </div>
       <Footer/>
      
       </>
    )
}

export default Signup;