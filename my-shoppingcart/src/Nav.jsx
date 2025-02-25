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
                <li>Men</li>
                <li>Women</li>
                <li>Accessories</li>
            </div>
            <div className='Logo'>
                Basiq 
            </div>
            <div className='Links'>
                <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/products">Products</Link></li>
                    <Link to = "/cart"><Icon path={mdiCart} className='cart' size={1} /></Link>
                    
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