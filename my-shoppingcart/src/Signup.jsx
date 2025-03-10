import './styles/Signup.css'
import Footer from './Footer';
import { Link, useNavigate } from "react-router-dom";
import signup from "./assets/signup.jpg";
import {useState} from "react";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [pmatch, setPmatch] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate()


    const HandleSignUp = (e) =>{
        e.preventDefault();
        if(password !== confirmpassword){
            setPmatch(true);
            return;
        }

        
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        console.log("User Registered: ", existingUsers)
    
        const isEmailTaken = existingUsers.some(user => user.email === email);
        const isPhoneTaken = existingUsers.some(user => user.phone === phone);

        if (isEmailTaken || isPhoneTaken) {
            setError({ email: isEmailTaken, phone: isPhoneTaken });
            return;
        }
        
            setPmatch(false);
        

            const newUser = { email, password, phone };
            const updatedUsers = [...existingUsers, newUser]; 
            localStorage.setItem("users", JSON.stringify(updatedUsers));

            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setPhone("");

            navigate("/signin");
    }
    return(
       <>
       <div className='parent'>
       <div className="signupcontainer">
        <div className='imagecontainer'>
            <img src={signup} alt="signup" />
            <div className='signshadow'></div>
        </div>
        <div className='signupdetailscontainer'>
            <form 
            onSubmit={HandleSignUp}
            className='signcon'>
            <div className='topsign'>
            <h1>Sign Up</h1>
            <p>Lorem ipsum dolor sit amet</p>
            </div>

            <div className='inputcontainer fir'><input 
            placeholder='Email'
            type= "email"
            value = {email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={error.email ? "error-input" : "" }
            ></input>
             {error &&  <p className='error-email'>The email is already registered</p>}
            </div>
            <div className='inputcontainer sec'><input 
            placeholder='Create Password'
            value = {password}
             type= "password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className={pmatch ? "error-input" : "" }
            ></input>
             {pmatch && <p className='error-text'> The passwords do not match</p>}
            </div>
            <div className='inputcontainer thi'><input 
            placeholder='Confirm Password'
            value = {confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
             type= "password"
            className={pmatch ? "error-input" : "" }
            ></input>
              {pmatch && <p className='error-text'>The passwords do not match</p>}
            </div>
            
            <div className='inputcontainer for'><input 
            placeholder='Phone number'
            value = {phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className={error.phone ? "error-input" : "" }
            ></input>
            {error &&  <p className='error-email'>The contact is already registered</p>}

            </div>
          


            <div className='signbtncontainer'>
                <button type="submit">Create Account</button>
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