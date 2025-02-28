import './styles/Signin.css'
import Footer from './Footer';
const Signin = () => {
    return(
       <>
       <div className="signupcontainer">
        <div className='imagecontainer'></div>
        <div className='signupdetailscontainer'>
            <form>
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
                <p>Already have an account? <span>Sign Up</span></p>
            </div>
            </form>
           
            

        </div>
       </div>
       <Footer/>
       </>
    )
}

export default Signin;