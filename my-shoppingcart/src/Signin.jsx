import './styles/Signin.css'
import Footer from './Footer';
import { Link, useNavigate } from "react-router-dom";
import signin from './assets/signin.jpg'
import {useState} from "react";
import { useDispatch } from "react-redux";
import { login } from "./redux/authSlice";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();


const handleSignIn = (e) => {
    e.preventDefault();
    setEmailError(""); 
    setPasswordError(""); 


    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];


    const foundUser = existingUsers.find(user => user.email === email);


    if (!foundUser) {
        setEmailError("Account does not exist. Please sign up.");
        return;
    }

    if (foundUser.password !== password) {
        setPasswordError("Incorrect password. Please try again.");
        return;
    }

    dispatch(login(foundUser));

    console.log("Login successful, redirecting to home...");
    navigate("/"); 
};
    return(
       <>
       <div className="signupcontainer">
        <div className='imagecontainer'>
            <img src={signin} alt="signin" />
            <div className='signshadow'></div>
        </div>
        <div className='signupdetailscontainer'>
            <form className='signcon' onSubmit={handleSignIn}>
            <div className='topsign'>
            <h1>Sign In</h1>
            <p>Lorem ipsum dolor sit amet</p>
            </div>

            <div className='inputcontainer fir'><input 
           type="email"
           placeholder='Email'
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required
           className={emailError ? "error-input" : "" }

            ></input>
             {emailError && <p className='error-email'>{emailError}</p>}
            </div>
            <div className='inputcontainer sec'><input 
           type="password"
           placeholder='password'
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           className={passwordError ? "error-input" : "" }
           required

            ></input>
            {passwordError && <p className='error-email'>{passwordError}</p>}
            </div>
           

            <div className='signbtncontainertwo'>
                <button type="submit">Sign In</button>
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