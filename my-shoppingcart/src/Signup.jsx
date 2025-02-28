import './styles/Signup.css'
import Footer from './Footer';
import { Link } from "react-router-dom";

const Signup = () => {
    return(
       <>
       <div className="signupcontainer">
        <div className='imagecontainer'></div>
        <div className='signupdetailscontainer'>
            <form>
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
                <p>Already have an account? <span className='signin'><Link className='in' to='/signin'>Sign In</Link></span></p>
            </div>
            </form>
           
            

        </div>
       </div>
       <Footer/>
       </>
    )
}

export default Signup;