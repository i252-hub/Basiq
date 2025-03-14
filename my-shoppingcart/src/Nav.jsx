import './styles/HomePage.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { ShoppingBagIcon, HeartIcon, UserIcon} from '@heroicons/react/24/outline';
import { ShoppingBagIcon as ShoppingBagIconSolid, HeartIcon as HeartIconSolid, UserIcon as UserIconSolid} from '@heroicons/react/24/solid';
import { SparklesIcon, BriefcaseIcon} from '@heroicons/react/24/solid';
import DiamondIcon from '@mui/icons-material/Diamond';
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
               <Link to="/men" aria-label="Men's clothing"> <li className="navli">Men</li></Link>
               <Link to="/women" aria-label="Women's clothing"> <li className="navli">Women</li></Link>
               <Link to="/accessory"aria-label="Accessories"> <li className="navli">Accessories</li></Link>
                </ul>
            </div>
            <div className='Logo'>
             <Link  aria-label="Home"  to="/">
             <p className='basiq'>Basiq</p></Link>   
            </div>
            <div className='Links'>
                <ul className='linksul'>
                    <li><Link to = "/cart" aria-label="Shopping cart"><ShoppingBagIcon aria-hidden="true" className='icon bag'/></Link></li>
                    <li><Link to = "/wishlist" aria-label="Wishlist"><HeartIcon aria-hidden="true" className='icon heart'/></Link></li>
                    {user ? (
                        <>
                        <li className='logmail' aria-label={`Logged in as ${user.email}`}>{user.email.replace("@gmail.com", "")}</li>
                        <div className='logoutcon' role="menu">
                            <p role="menuitem">Account</p>
                            <p role="menuitem">Settings</p>
                            <p role="menuitem" onClick={() => dispatch(logout())}>Logout</p>
                        </div>
                        </>
                    ): (
                    <li><Link to = "/signin" aria-label="Sign in"><UserIcon aria-hidden="true" className='icon user'/></Link></li>
                    )}
                   
                </ul>
            </div>

       
        <div className="hamburger" onClick={toggleMenu}  aria-expanded={menuOpen} aria-label="Toggle menu">
        <span className='line'></span>
        <span className='line'></span>
        <span className='line'></span>
           </div>

           <div className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>

                    <div className='top'>
                       
                         <p className='logoo'> Basiq</p>  
                       
                        <div className="hamburger close" aria-label="Close menu" onClick={toggleMenu}>
                                <span className='line'></span>
                                <span className='line'></span>
                                <span className='line'></span>
                    </div>
                    </div>
                  

                    <ul className='mobilelink'>
                        <li><HeartIconSolid aria-hidden="true" className='icon heart'/><Link to="/wishlist" aria-label="Wishlist" className='mobilelinkz'>Wishlist</Link></li>
                        <li><ShoppingBagIconSolid aria-hidden="true" className='icon bag'/><Link to="/cart" aria-label="Cart"  className='mobilelinkz'>Shopping Cart</Link></li>
                        <li><UserIconSolid aria-hidden="true" className='icon user'/><Link to="/signin" aria-label="Signin"  className='mobilelinkz'>Sign in</Link></li>
                    </ul>
                    <ul className='mobilelink'>
                        <li><SparklesIcon aria-hidden="true" className='icon sparkle'/><Link to="/women" aria-label="Women"  className='mobilelinkz'>Women</Link></li>
                        <li><BriefcaseIcon aria-hidden="true" className='icon briefcase'/><Link to="/men" aria-label="Men"  className='mobilelinkz'>Men</Link></li>
                        <li><DiamondIcon aria-hidden="true" style={{ width: '24px', color: '#4C4949' }}/><Link to="/accessory" aria-label="Accessory"  className='mobilelinkz'>Accessories</Link></li>
                    </ul>
                   
                </div>
           
          
           
         
                
            
         </nav>

        </>
    )
}

export default Nav;