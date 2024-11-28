import './styles/HomePage.css';
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';
import { Link } from "react-router-dom";

const Nav = () =>{
    return (
        <>
         <nav>
            <div className='Logo'>
                Kirsten 
            </div>
            <div className='Links'>
                <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/products">Products</Link></li>
                    <Icon path={mdiCart} size={1} />
                </ul>
            </div>
         </nav>

        </>
    )
}

export default Nav;