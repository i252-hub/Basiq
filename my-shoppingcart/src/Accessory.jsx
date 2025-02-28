import { useEffect, useState } from 'react';
import './styles/Products.css';
import { Link } from "react-router-dom";
import Nav from './Nav';
import {PlusIcon} from '@heroicons/react/24/solid'

const Accessory = () => {
    const [productAccess, setProductsAccess] = useState([]);
    const [error, setError] = useState(null);
    const [isHeadingVisible, setIsHeadingVisible] = useState(false);

    useEffect(() => {
            fetch('https://fakestoreapi.com/products', {mode: 'cors'})
            .then((response) => response.json())
            .then((data) => {
                const filteredListA = data.filter((resA)=> resA.category == "jewelery");
                setProductsAccess(filteredListA);
            })
            .catch(() =>{
                setError('No products found');
            })
            const timeoutId = setTimeout(() => {
                setIsHeadingVisible(true); 
            }, 300); 
    
          
            return () => clearTimeout(timeoutId);
        }, []);
       
    
    return ( 
       <>
       <Nav/>
      <div className="products">
       <section className="Accessory">
       {isHeadingVisible && 
         <>
         <div className='productpagementitle'><p>ACCESSORIES`</p></div>
         <div className='sortandfilter'>
         <div className='sfcontainer'>
             <p>SORT BY</p>
             <PlusIcon className='iconplus'/>
         </div>
        </div>
        </>
       }
        {error && <p>No products found</p>}
        <div className='flex'>
            <div className="productListAccess">
                {productAccess.map((product,index) => (
                    <div key={product.id} className={`product ${index + 1}`}>
                        <div className="accessories">
                        <Link to = {`/productinfo/${product.id}`}>
                        <img src={product.image} alt={product.title} className="accessory" />
                        </Link>
                        
                        </div>
                       
                        </div>
                        ))}
                        </div>
        </div>
       </section>
       </div>
       </>
         
    )
}

export default Accessory;