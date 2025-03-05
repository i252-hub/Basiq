import './styles/Signin.css'
import Footer from './Footer';
import { Link } from "react-router-dom";
import signin from './assets/signin.jpg'

const Signin = () => {
    return(
       <>
       <div className="signupcontainer">
        <div className='imagecontainer'>
            <img src={signin} alt="signin" />
            <div className='signshadow'></div>
        </div>
        <div className='signupdetailscontainer'>
            <form className='signcon'>
            <div className='topsign'>
            <h1>Sign In</h1>
            <p>Lorem ipsum dolor sit amet</p>
            </div>

            <div className='inputcontainer fir'><input placeholder='Email'></input></div>
            <div className='inputcontainer sec'><input placeholder='Password'></input></div>
           

            <div className='signbtncontainertwo'>
                <button>Sign In</button>
            </div>
            <div className='tosignup'>
                <p>Already have an account? <span><Link to="/signup">Sign Up</Link></span></p>
            </div>
            </form>
           
            

        </div>
       </div>
       <Footer/>
       
       </>
    )
}

export default Signin;