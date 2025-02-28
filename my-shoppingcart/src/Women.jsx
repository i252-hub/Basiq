import { useEffect, useState } from 'react';
import './styles/Products.css';
import { Link } from "react-router-dom";
import Nav from './Nav';
import {PlusIcon} from '@heroicons/react/24/solid'

const Women = () => {
    const [productWomen, setProductsWomen] = useState([]);
    const [error, setError] = useState(null);
    const [isHeadingVisible, setIsHeadingVisible] = useState(false);

    useEffect(() => {
            fetch('https://fakestoreapi.com/products', {mode: 'cors'})
            .then((response) => response.json())
            .then((data) => {
                const filteredListW = data.filter((resW)=> resW.category == "women's clothing");
                setProductsWomen(filteredListW);
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
              <Nav />
        <div className="products">
       <section className="Women">
       {isHeadingVisible && 
        <>
        <div className='productpagementitle'><p>WOMEN`S CLOTHING</p></div>
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
            <div className="productListWomen">
                {productWomen.map((product,index) => (
                    <div key={product.id} className={`product ${index + 1}`}>
                        <div className='womens'>
                        <Link className="womenlink" to = {`/productinfo/${product.id}`}>
                        <img src={product.image} alt={product.title} className="women" />
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

export default Women;