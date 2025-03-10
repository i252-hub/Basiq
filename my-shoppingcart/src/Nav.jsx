import './styles/HomePage.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { ShoppingBagIcon, HeartIcon, UserIcon} from '@heroicons/react/24/outline';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./redux/authSlice";

const Nav = () =>{
    const [menuOpen, setMenuOpen] = useState(false);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);    };
    return (
        <>
         <nav>
            <div className='categories'>
                <ul className='categoriesul'>
               <Link to="/men"> <li>Men</li></Link>
               <Link to="/women"> <li>Women</li></Link>
               <Link to="/accessory"> <li>Accessories</li></Link>
                </ul>
            </div>
            <div className='Logo'>
             <Link  to="/">
             <p className='basiq'>Basiq</p></Link>   
            </div>
            <div className='Links'>
                <ul className='linksul'>
                    <li><Link to = "/cart"><ShoppingBagIcon className='icon bag'/></Link></li>
                    <li><Link to = "/wishlist"><HeartIcon className='icon heart'/></Link></li>
                    {user ? (
                        <>
                        <li className='logmail'>{user.email.replace("@gmail.com", "")}</li>
                        <div className='logoutcon'>
                            <p>Account</p>
                            <p>Settings</p>
                            <p onClick={() => dispatch(logout())}>Logout</p>
                        </div>
                        </>
                    ): (
                    <li><Link to = "/signin"><UserIcon className='icon user'/></Link></li>
                    )}
                   
                </ul>
            </div>

       
        <div className="hamburger" onClick={toggleMenu}>
        <span className='line'></span>
        <span className='line'></span>
        <span className='line'></span>
           </div>

           <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

                    <div className='top'>
                       
                         <p className='logoo'> Kirsten</p>  
                       
                        <div className="hamburger close" onClick={toggleMenu}>
                                <span className='line'></span>
                                <span className='line'></span>
                                <span className='line'></span>
                    </div>
                    </div>
                  

                    <ul className='mobilelink'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                    </ul>
                   
                </div>
           
          
           
         
                
            
         </nav>

        </>
    )
}

export default Nav;