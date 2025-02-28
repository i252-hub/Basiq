import './styles/HomePage.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { ShoppingBagIcon, HeartIcon, UserIcon} from '@heroicons/react/24/outline'

const Nav = () =>{
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);    };
    return (
        <>
         <nav>
            <div className='categories'>
                <ul className='categoriesul'>
                <li><Link to="/men">Men</Link></li>
                <li><Link to="/women">Women</Link></li>
                <li><Link to="/accessory">Accessories</Link></li>
                </ul>
            </div>
            <div className='Logo'>
                Basiq 
            </div>
            <div className='Links'>
                <ul className='linksul'>
                    <li><Link to = "/"><ShoppingBagIcon className='icon bag'/></Link></li>
                    <li><Link to = "/"><HeartIcon className='icon heart'/></Link></li>
                   <li><Link to = "/signin"><UserIcon className='icon user'/></Link></li>
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